import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../database/database.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

jest.mock('bcryptjs');

describe('AuthService', () => {
    let service: AuthService;
    let prismaService: PrismaService;
    let jwtService: JwtService;

    const mockPrismaService = {
        usuario: {
            findUnique: jest.fn(),
            update: jest.fn(),
        },
    };

    const mockJwtService = {
        signAsync: jest.fn(),
        verifyAsync: jest.fn(),
    };

    const mockConfigService = {
        get: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AuthService,
                { provide: PrismaService, useValue: mockPrismaService },
                { provide: JwtService, useValue: mockJwtService },
                { provide: ConfigService, useValue: mockConfigService },
            ],
        }).compile();

        service = module.get<AuthService>(AuthService);
        prismaService = module.get<PrismaService>(PrismaService);
        jwtService = module.get<JwtService>(JwtService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('login', () => {
        const loginDto = { email: 'test@example.com', senha: 'password' };
        const user = { id: 'user-1', email: 'test@example.com', senha: 'hashedPassword', perfil: 'ADMIN' };

        it('should return tokens on successful login', async () => {
            mockPrismaService.usuario.findUnique.mockResolvedValue(user);
            (bcrypt.compare as jest.Mock).mockResolvedValue(true);
            mockJwtService.signAsync.mockResolvedValue('token');

            const result = await service.login(loginDto);

            expect(result).toHaveProperty('access_token');
            expect(result).toHaveProperty('refresh_token');
            expect(result.usuario.email).toBe(user.email);
            expect(mockPrismaService.usuario.update).toHaveBeenCalled();
        });

        it('should throw UnauthorizedException if user not found', async () => {
            mockPrismaService.usuario.findUnique.mockResolvedValue(null);

            await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
        });

        it('should throw UnauthorizedException if password invalid', async () => {
            mockPrismaService.usuario.findUnique.mockResolvedValue(user);
            (bcrypt.compare as jest.Mock).mockResolvedValue(false);

            await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
        });
    });

    describe('refreshToken', () => {
        const token = 'valid-refresh-token';
        const payload = { sub: 'user-1' };
        const user = { id: 'user-1', refreshToken: token };

        it('should return new access token', async () => {
            mockJwtService.verifyAsync.mockResolvedValue(payload);
            mockPrismaService.usuario.findUnique.mockResolvedValue(user);
            mockJwtService.signAsync.mockResolvedValue('new-access-token');

            const result = await service.refreshToken(token);

            expect(result).toHaveProperty('access_token', 'new-access-token');
        });

        it('should throw UnauthorizedException if token invalid', async () => {
            mockJwtService.verifyAsync.mockRejectedValue(new Error());

            await expect(service.refreshToken(token)).rejects.toThrow(UnauthorizedException);
        });

        it('should throw UnauthorizedException if user not found or token mismatch', async () => {
            mockJwtService.verifyAsync.mockResolvedValue(payload);
            mockPrismaService.usuario.findUnique.mockResolvedValue({ ...user, refreshToken: 'other-token' });

            await expect(service.refreshToken(token)).rejects.toThrow(UnauthorizedException);
        });
    });

    describe('logout', () => {
        it('should clear refresh token', async () => {
            await service.logout('user-1');
            expect(mockPrismaService.usuario.update).toHaveBeenCalledWith({
                where: { id: 'user-1' },
                data: { refreshToken: null },
            });
        });
    });

    describe('verifyToken', () => {
        it('should return user if token valid', async () => {
            mockJwtService.verifyAsync.mockResolvedValue({ sub: 'user-1' });
            mockPrismaService.usuario.findUnique.mockResolvedValue({ id: 'user-1' });

            const result = await service.verifyToken('token');
            expect(result).toEqual({ id: 'user-1' });
        });

        it('should throw UnauthorizedException if token invalid', async () => {
            mockJwtService.verifyAsync.mockRejectedValue(new Error());
            await expect(service.verifyToken('token')).rejects.toThrow(UnauthorizedException);
        });
    });
});
