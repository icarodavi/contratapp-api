import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, ConnectedSocket, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WsJwtAuthGuard } from '../auth/guards/ws-jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Logger } from '@nestjs/common';

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
        origin: '*',
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

    handleConnection(client: Socket) {
        try {
            const editalId = client.handshake.query.editalId as string;
            const tipoAutor = client.handshake.query.tipoAutor as string;

            this.logger.debug(`Debug handleConnection - Cliente conectado:`, {
                clientId: client.id,
                editalId,
                tipoAutor
            });

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
                this.logger.debug(`Debug handleConnection - Enviando estado atual do contador:`, {
                    clientId: client.id,
                    editalId,
                    contador
                });

                const agora = Date.now();
                const tempoDecorrido = contador.pausado ? 0 : agora - contador.inicio;
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
        console.log('Debug: Evento iniciarContagem recebido', {
            clientId: client.id,
            data,
            handshake: client.handshake,
            rooms: Array.from(client.rooms)
        });

        const editalId = client.handshake.query.editalId as string;
        const tipoAutor = client.handshake.query.tipoAutor as string;

        if (!editalId || !tipoAutor) {
            const error = 'EditalId ou tipoAutor não fornecidos';
            console.error('Debug: ' + error, { editalId, tipoAutor });
            return { error };
        }

        if (tipoAutor !== 'PREGOEIRO') {
            const error = 'Apenas o pregoeiro pode iniciar a contagem';
            console.error('Debug: ' + error, { tipoAutor });
            return { error };
        }

        if (!data?.tempoInicial || isNaN(data.tempoInicial) || data.tempoInicial <= 0) {
            const error = 'Tempo inicial inválido';
            console.error('Debug: ' + error, { tempoInicial: data?.tempoInicial });
            return { error };
        }

        // Limpa contador anterior se existir
        const contadorAnterior = this.contadores.get(editalId);
        if (contadorAnterior?.intervalo) {
            console.log('Debug: Limpando contador anterior', { editalId });
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

                console.log('Debug: Atualizando contador', {
                    editalId,
                    tempoRestante: contador.tempoRestante,
                    tempoDecorrido
                });

                this.server.to(editalId).emit('atualizacaoContagem', {
                    tempoRestante: contador.tempoRestante
                });

                if (contador.tempoRestante <= 0) {
                    console.log('Debug: Contador finalizado', { editalId });
                    if (contador.intervalo) {
                        clearInterval(contador.intervalo);
                    }
                    this.contadores.delete(editalId);
                    this.server.to(editalId).emit('contagemFinalizada');
                }
            }
        }, 100);

        this.contadores.set(editalId, contador);

        const clientesNaSala = await this.server.in(editalId).allSockets();
        console.log('Debug: Contagem iniciada', {
            editalId,
            clientesNaSala: Array.from(clientesNaSala).length,
            totalClientes: this.server.sockets.sockets.size
        });

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
            this.logger.warn(`Tentativa de pausar contagem por não pregoeiro: ${client.id}`);
            return { error: 'Apenas o pregoeiro pode pausar a contagem' };
        }

        const contador = this.contadores.get(editalId);
        if (!contador || contador.pausado) return;

        const agora = Date.now();
        const tempoDecorrido = agora - contador.inicio;
        const tempoRestante = Math.max(0, contador.tempoRestante - tempoDecorrido);

        contador.tempoRestante = tempoRestante;
        contador.pausado = true;

        // Envia o evento de pausa para todos os clientes
        this.server.to(editalId).emit('contagemPausada', {
            tempoRestante: tempoRestante
        });

        this.logger.log(`Contagem pausada para edital ${editalId} com ${tempoRestante}ms restantes`);
        return { success: true };
    }

    @SubscribeMessage('retomarContagem')
    async handleRetomarContagem(client: Socket) {
        const editalId = client.handshake.query.editalId as string;
        const tipoAutor = client.handshake.query.tipoAutor as string;

        if (tipoAutor !== 'PREGOEIRO') {
            this.logger.warn(`Tentativa de retomar contagem por não pregoeiro: ${client.id}`);
            return { error: 'Apenas o pregoeiro pode retomar a contagem' };
        }

        const contador = this.contadores.get(editalId);
        if (!contador || !contador.pausado) return;

        const agora = Date.now();
        const tempoDecorrido = agora - contador.inicio;
        const tempoRestante = Math.max(0, contador.tempoRestante - tempoDecorrido);

        contador.tempoRestante = tempoRestante;
        contador.pausado = false;

        // Envia o evento de retomada para todos os clientes
        this.server.to(editalId).emit('contagemRetomada', {
            timestampInicio: contador.inicio,
            tempoRestante: contador.tempoRestante
        });

        this.logger.log(`Contagem retomada para edital ${editalId} com ${tempoRestante}ms restantes`);
        return { success: true };
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