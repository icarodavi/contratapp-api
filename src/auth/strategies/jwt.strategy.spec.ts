import { JwtStrategy } from './jwt.strategy';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('JwtStrategy', () => {
    let strategy: JwtStrategy;

    const mockConfigService = {
        get: jest.fn().mockReturnValue('secret'),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                JwtStrategy,
                { provide: ConfigService, useValue: mockConfigService },
            ],
        }).compile();

        strategy = module.get<JwtStrategy>(JwtStrategy);
    });

    it('should be defined', () => {
        expect(strategy).toBeDefined();
    });

    it('should validate and return user payload', async () => {
        const payload = { sub: 'u1', email: 'test@example.com', perfil: 'ADMIN' };
        const result = await strategy.validate(payload);
        expect(result).toEqual({ id: 'u1', email: 'test@example.com', perfil: 'ADMIN' });
    });
});
