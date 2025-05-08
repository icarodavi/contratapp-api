import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';


@Injectable()
export class WsJwtAuthGuard implements CanActivate {
    private logger = new Logger(WsJwtAuthGuard.name)
    constructor(
        private authService: AuthService,

    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const client = context.switchToWs().getClient();
        const token = this.extractTokenFromHeader(client);

        if (!token) {
            throw new UnauthorizedException('Token não fornecido');
        }

        try {
            const payload = await this.authService.verifyToken(token);
            client.data.usuario = payload;
            return true;
        } catch (error) {
            throw new UnauthorizedException('Token inválido');
        }
    }

    private extractTokenFromHeader(client: any): string | undefined {
        // Primeiro tenta pegar do header
        const [type, token] = client.handshake.headers.authorization?.split(' ') ?? [];
        if (type === 'Bearer' && token) return token;

        // Depois tenta pegar do campo auth (padrão do socket.io)
        if (client.handshake.auth && client.handshake.auth.token) {
            return client.handshake.auth.token;
        }
        return undefined;
    }
} 