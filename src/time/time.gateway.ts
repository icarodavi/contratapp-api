import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, ConnectedSocket, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WsJwtAuthGuard } from '../auth/guards/ws-jwt-auth.guard';
import { UseGuards, Logger } from '@nestjs/common';
import { DisputaService } from '../disputa/disputa.service';

interface Contador {
    inicio: number;
    tempoInicial: number;
    tempoRestante: number;
    ultimaAtualizacao: number;
    intervalo: NodeJS.Timeout | null;
    pausado: boolean;
}

@WebSocketGateway({
    cors: {
        origin: true,
        methods: ['GET', 'POST'],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Accept', 'Authorization']
    },
    namespace: 'time'
})
@UseGuards(WsJwtAuthGuard)
export class TimeGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    private readonly logger = new Logger(TimeGateway.name);

    // Armazena os contadores ativos por edital
    private contadores: Map<string, Contador> = new Map();

    // Armazena os clientes conectados por edital
    private clientesPorEdital: Map<string, Set<string>> = new Map();

    constructor(private readonly disputaService: DisputaService) {}

    handleConnection(client: Socket) {
        this.logger.log(`[TimeGateway] Nova conexão: ${client.id}`);
        try {
            const editalId = client.handshake.query.editalId as string;
            const tipoAutor = client.handshake.query.tipoAutor as string;

            this.logger.log(`[TimeGateway] Params: Edital=${editalId}, Tipo=${tipoAutor}`);

            if (!editalId) {
                this.logger.warn(`Tentativa de conexão sem editalId: ${client.id}`);
                client.disconnect();
                return;
            }

            // Adiciona o cliente ao conjunto de clientes do edital
            if (!this.clientesPorEdital.has(editalId)) {
                this.clientesPorEdital.set(editalId, new Set());
            }
            this.clientesPorEdital.get(editalId)?.add(client.id);

            // Adiciona o cliente à sala do edital
            client.join(editalId);

            // Envia a contagem de usuários para todos os pregoeiros do edital
            const quantidadeUsuarios = this.clientesPorEdital.get(editalId)?.size || 0;
            this.server.to(editalId).emit('usuariosOnline', {
                quantidade: quantidadeUsuarios,
                tipoAutor: tipoAutor
            });

            // Se houver um contador ativo para este edital, envia o estado atual para o novo cliente
            const contador = this.contadores.get(editalId);
            if (contador) {

                const agora = Date.now();
                const tempoDecorrido = contador.pausado ? 0 : agora - contador.ultimaAtualizacao;
                const tempoRestante = Math.max(0, contador.tempoRestante - tempoDecorrido);

                client.emit('contagemIniciada', {
                    tempoRestante: tempoRestante,
                    timestampInicio: contador.inicio,
                    pausado: contador.pausado
                });

                if (contador.pausado) {
                    client.emit('contagemPausada', {
                        tempoRestante: contador.tempoRestante
                    });
                }
            }
        } catch (error) {
            this.logger.error('Erro em handleConnection:', error);
        }
    }

    handleDisconnect(client: Socket) {
        const editalId = client.handshake.query.editalId as string;

        if (editalId) {
            // Remove o cliente do conjunto
            const clientes = this.clientesPorEdital.get(editalId);
            if (clientes) {
                clientes.delete(client.id);

                // Atualiza a contagem para todos os clientes do edital
                const quantidadeUsuarios = clientes.size;
                this.server.to(editalId).emit('usuariosOnline', {
                    quantidade: quantidadeUsuarios
                });
            }
        }
    }

    @SubscribeMessage('iniciarContagem')
    async handleIniciarContagem(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { tempoInicial: number },
    ) {

        const editalId = client.handshake.query.editalId as string;
        const tipoAutor = client.handshake.query.tipoAutor as string;

        if (tipoAutor !== 'PREGOEIRO') {
            return { error: 'Apenas o pregoeiro pode iniciar a contagem' };
        }


        const contadorAnterior = this.contadores.get(editalId);
        if (contadorAnterior?.intervalo) {
            clearInterval(contadorAnterior.intervalo);
            this.contadores.delete(editalId);
        }

        const agora = Date.now();
        const contador: Contador = {
            inicio: agora,
            tempoInicial: data.tempoInicial,
            tempoRestante: data.tempoInicial,
            ultimaAtualizacao: agora,
            intervalo: null,
            pausado: false
        };

        // Inicia o novo contador
        contador.intervalo = setInterval(() => {
            if (contador.pausado) return;

            const tempoAtual = Date.now();
            const tempoDecorrido = tempoAtual - contador.ultimaAtualizacao;

            if (tempoDecorrido >= 1000) { // Atualiza a cada segundo
                contador.tempoRestante = Math.max(0, contador.tempoRestante - tempoDecorrido);
                contador.ultimaAtualizacao = tempoAtual;

                this.server.to(editalId).emit('atualizacaoContagem', {
                    tempoRestante: contador.tempoRestante,
                    timestamp: tempoAtual
                });

                if (contador.tempoRestante <= 0) {
                    if (contador.intervalo) {
                        clearInterval(contador.intervalo);
                    }
                    this.contadores.delete(editalId);
                    this.server.to(editalId).emit('contagemFinalizada');

                    // Encerra a disputa no banco de dados
                    this.encerrarDisputaDb(editalId);
                }
            }
        }, 100);

        this.contadores.set(editalId, contador);

        this.server.to(editalId).emit('contagemIniciada', {
            tempoRestante: contador.tempoRestante,
            timestampInicio: contador.inicio
        });

        return { success: true };
    }

    @SubscribeMessage('pausarContagem')
    async handlePausarContagem(client: Socket) {
        const editalId = client.handshake.query.editalId as string;
        const tipoAutor = client.handshake.query.tipoAutor as string;

        if (tipoAutor !== 'PREGOEIRO') {
            return { error: 'Apenas o pregoeiro pode pausar a contagem' };
        }

        const contador = this.contadores.get(editalId);
        if (!contador || contador.pausado) return;

        const agora = Date.now();
        const tempoDecorrido = agora - contador.ultimaAtualizacao;
        const tempoRestante = Math.max(0, contador.tempoRestante - tempoDecorrido);

        contador.tempoRestante = tempoRestante;
        contador.pausado = true;
        contador.ultimaAtualizacao = agora;

        this.server.to(editalId).emit('contagemPausada', {
            tempoRestante: tempoRestante,
            timestamp: agora
        });

        return { success: true };
    }

    @SubscribeMessage('retomarContagem')
    async handleRetomarContagem(client: Socket) {
        const editalId = client.handshake.query.editalId as string;
        const tipoAutor = client.handshake.query.tipoAutor as string;

        if (tipoAutor !== 'PREGOEIRO') {
            return { error: 'Apenas o pregoeiro pode retomar a contagem' };
        }

        const contador = this.contadores.get(editalId);
        if (!contador || !contador.pausado) return;

        const agora = Date.now();
        contador.pausado = false;
        contador.ultimaAtualizacao = agora;

        this.server.to(editalId).emit('contagemRetomada', {
            tempoRestante: contador.tempoRestante,
            timestampInicio: agora
        });

        return { success: true };
    }

    private async encerrarDisputaDb(editalId: string) {
        try {
            const disputas = await this.disputaService.findByEdital(editalId);
            const disputaAberta = disputas.find(d => d.status === 'ABERTA');
            if (disputaAberta) {
                await this.disputaService.encerrarDisputa(disputaAberta.id);
                this.logger.log(`Disputa ${disputaAberta.id} encerrada automaticamente pelo temporizador.`);
            }
        } catch (e) {
            this.logger.error(`Erro ao encerrar disputa do edital ${editalId}:`, e);
        }
    }

    private limparContador(editalId: string) {
        try {
            const contador = this.contadores.get(editalId);
            if (contador && contador.intervalo) {
                clearInterval(contador.intervalo);
                this.contadores.delete(editalId);
                this.logger.debug(`Contador limpo para edital ${editalId}`);
            }
        } catch (error) {
            this.logger.error('Erro ao limpar contador:', error);
        }
    }
}