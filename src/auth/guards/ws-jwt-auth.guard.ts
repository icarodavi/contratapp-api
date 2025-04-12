import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class WsJwtAuthGuard implements CanActivate {
    constructor(private authService: AuthService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const client = context.switchToWs().getClient();
        const token = this.extractTokenFromHeader(client);

        if (!token) {
            return false;
        }

        try {
            const payload = await this.authService.verifyToken(token);
            client.data.usuario = payload;
            return true;
        } catch {
            return false;
        }
    }

    private extractTokenFromHeader(client: any): string | undefined {
        const [type, token] = client.handshake.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
} 