import { WsJwtAuthGuard } from './ws-jwt-auth.guard';
import { AuthService } from '../auth.service';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

describe('WsJwtAuthGuard', () => {
    let guard: WsJwtAuthGuard;
    let authService: AuthService;

    const mockAuthService = {
        verifyToken: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WsJwtAuthGuard,
                { provide: AuthService, useValue: mockAuthService },
            ],
        }).compile();

        guard = module.get<WsJwtAuthGuard>(WsJwtAuthGuard);
        authService = module.get<AuthService>(AuthService);
    });

    it('should be defined', () => {
        expect(guard).toBeDefined();
    });

    it('should throw UnauthorizedException if no token provided', async () => {
        const context = {
            switchToWs: jest.fn().mockReturnValue({
                getClient: jest.fn().mockReturnValue({
                    handshake: { headers: {} },
                }),
            }),
        } as unknown as ExecutionContext;

        await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
    });

    it('should return true if token is valid', async () => {
        const context = {
            switchToWs: jest.fn().mockReturnValue({
                getClient: jest.fn().mockReturnValue({
                    handshake: { headers: { authorization: 'Bearer valid_token' } },
                    data: {},
                }),
            }),
        } as unknown as ExecutionContext;

        mockAuthService.verifyToken.mockResolvedValue({ id: 'u1' });

        expect(await guard.canActivate(context)).toBe(true);
        expect(authService.verifyToken).toHaveBeenCalledWith('valid_token');
    });

    it('should throw UnauthorizedException if token is invalid', async () => {
        const context = {
            switchToWs: jest.fn().mockReturnValue({
                getClient: jest.fn().mockReturnValue({
                    handshake: { headers: { authorization: 'Bearer invalid_token' } },
                }),
            }),
        } as unknown as ExecutionContext;

        mockAuthService.verifyToken.mockRejectedValue(new Error('Invalid token'));

        await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
    });
});
