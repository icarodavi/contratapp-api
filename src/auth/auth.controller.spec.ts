import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RateLimitGuard } from './guards/rate-limit.guard';
import { JwtAuthGuard } from './auth.guard';

describe('AuthController', () => {
    let controller: AuthController;
    let authService: AuthService;

    const mockAuthService = {
        login: jest.fn(),
        refreshToken: jest.fn(),
        logout: jest.fn(),
    };

    const mockRateLimitGuard = {
        canActivate: jest.fn(() => true),
    };

    const mockJwtAuthGuard = {
        canActivate: jest.fn(() => true),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
            ],
        })
            .overrideGuard(RateLimitGuard).useValue(mockRateLimitGuard)
            .overrideGuard(JwtAuthGuard).useValue(mockJwtAuthGuard)
            .compile();

        controller = module.get<AuthController>(AuthController);
        authService = module.get<AuthService>(AuthService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('login', () => {
        it('should call authService.login', async () => {
            const dto = { email: 'test@test.com', senha: '123' };
            mockAuthService.login.mockResolvedValue({ access_token: 'token' });

            const result = await controller.login(dto);
            expect(result).toEqual({ access_token: 'token' });
            expect(authService.login).toHaveBeenCalledWith(dto);
        });
    });

    describe('refreshToken', () => {
        it('should call authService.refreshToken', async () => {
            const body = { refresh_token: 'refresh' };
            mockAuthService.refreshToken.mockResolvedValue({ access_token: 'new' });

            const result = await controller.refreshToken(body);
            expect(result).toEqual({ access_token: 'new' });
            expect(authService.refreshToken).toHaveBeenCalledWith('refresh');
        });
    });

    describe('logout', () => {
        it('should call authService.logout', async () => {
            const req = { user: { id: 'user-1' } };
            mockAuthService.logout.mockResolvedValue(undefined);

            await controller.logout(req);
            expect(authService.logout).toHaveBeenCalledWith('user-1');
        });
    });
});
