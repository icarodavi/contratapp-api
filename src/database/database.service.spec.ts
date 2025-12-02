import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './database.service';
import { INestApplication } from '@nestjs/common';

describe('PrismaService', () => {
    let service: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PrismaService],
        }).compile();

        service = module.get<PrismaService>(PrismaService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should connect on module init', async () => {
        const connectSpy = jest.spyOn(service, '$connect').mockImplementation(async () => {});
        await service.onModuleInit();
        expect(connectSpy).toHaveBeenCalled();
    });

    it('should enable shutdown hooks', async () => {
        const app = {
            close: jest.fn(),
        } as unknown as INestApplication;

        const processOnSpy = jest.spyOn(process, 'on').mockImplementation((event, listener) => {
            if (event === 'beforeExit') {
                // @ts-ignore
                listener(0);
            }
            return process;
        });

        await service.enableShutdownHooks(app);
        expect(processOnSpy).toHaveBeenCalledWith('beforeExit', expect.any(Function));
        expect(app.close).toHaveBeenCalled();

        processOnSpy.mockRestore();
    });
});
