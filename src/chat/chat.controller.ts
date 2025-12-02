import { Controller, Get, Post, Body, Param, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/auth.guard';
import { ChatService } from './chat.service';
import { MensagemChatDto } from './dto/mensagem-chat.dto';
import { EnviarMensagemDto } from './dto/enviar-mensagem.dto';

@ApiTags('Chat')
@Controller('chat')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ChatController {
    constructor(private readonly chatService: ChatService) {}

    @Get(':editalId')
    @ApiOperation({ summary: 'Obter histórico de mensagens do chat' })
    @ApiResponse({
        status: 200,
        description: 'Retorna o histórico de mensagens do chat',
        type: [MensagemChatDto]
    })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Edital não encontrado' })
    async getHistoricoMensagens(
        @Param('editalId') editalId: string,
        @Req() req: any
    ) {
        const usuarioId = req.user?.id;
        if (!usuarioId) {
            throw new Error('Usuário não autenticado');
        }
        return this.chatService.obterHistoricoMensagens(editalId, usuarioId);
    }

    @Post(':editalId')
    @ApiOperation({ summary: 'Enviar mensagem no chat' })
    @ApiResponse({
        status: 201,
        description: 'Mensagem enviada com sucesso',
        type: MensagemChatDto
    })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Edital não encontrado' })
    async enviarMensagem(
        @Param('editalId') editalId: string,
        @Body() enviarMensagemDto: EnviarMensagemDto,
        @Req() req: any
    ) {
        const usuarioId = req.user?.id;
        const perfil = req.user?.perfil;

        if (!usuarioId || !perfil) {
            throw new Error('Usuário não autenticado');
        }

        return this.chatService.criarMensagem(
            editalId,
            usuarioId,
            perfil,
            enviarMensagemDto.conteudo
        );
    }
}