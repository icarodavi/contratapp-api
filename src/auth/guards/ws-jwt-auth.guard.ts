import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WsJwtAuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private configService: ConfigService,
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
        const [type, token] = client.handshake.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
} 