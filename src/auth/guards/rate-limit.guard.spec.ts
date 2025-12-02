import { Test, TestingModule } from '@nestjs/testing';
import { RateLimitGuard } from './rate-limit.guard';
import { ThrottlerModule } from '@nestjs/throttler';
import { ExecutionContext } from '@nestjs/common';

describe('RateLimitGuard', () => {
    let guard: RateLimitGuard;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ThrottlerModule.forRoot([{
                    ttl: 60000,
                    limit: 10,
                }]),
            ],
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

    it('deve retornar req.ip se ips estiver vazio', async () => {
        const mockRequest = {
            ip: '127.0.0.1',
            ips: [],
        };

        const result = await guard['getTracker'](mockRequest);
        expect(result).toBe('127.0.0.1');
    });
});