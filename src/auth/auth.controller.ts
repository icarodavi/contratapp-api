import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth.guard';
import { RateLimitGuard } from './guards/rate-limit.guard';
import { LoginDto } from '../usuario/dto/auth.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    @UseGuards(RateLimitGuard)
    @ApiOperation({ summary: 'Login de usuário' })
    @ApiResponse({ status: 200, description: 'Login realizado com sucesso' })
    @ApiResponse({ status: 401, description: 'Credenciais inválidas' })
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Post('refresh')
    @ApiOperation({ summary: 'Atualizar token de acesso' })
    @ApiResponse({ status: 200, description: 'Token atualizado com sucesso' })
    @ApiResponse({ status: 401, description: 'Token inválido' })
    async refreshToken(@Body() body: RefreshTokenDto) {
        return this.authService.refreshToken(body.refresh_token);
    }

    @Post('logout')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Logout do usuário' })
    @ApiResponse({ status: 200, description: 'Logout realizado com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    async logout(@Req() req: any) {
        return this.authService.logout(req.user.id);
    }
}