import { Test, TestingModule } from '@nestjs/testing';
import { RateLimitGuard } from './rate-limit.guard';
import { ExecutionContext } from '@nestjs/common';

describe('RateLimitGuard', () => {
    let guard: RateLimitGuard;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RateLimitGuard],
        }).compile();

        guard = module.get<RateLimitGuard>(RateLimitGuard);
    });

    it('deve retornar o IP correto do cliente', async () => {
        const mockRequest = {
            ip: '127.0.0.1',
            ips: ['192.168.1.1', '127.0.0.1'],
        };

        const mockContext = {
            switchToHttp: () => ({
                getRequest: () => mockRequest,
            }),
        } as ExecutionContext;

        const result = await guard['getTracker'](mockRequest);
        expect(result).toBe('192.168.1.1');
    });
}); 