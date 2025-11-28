import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from './database.module';

describe('DatabaseModule', () => {
    it('should compile', async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [DatabaseModule],
        }).compile();

        expect(module).toBeDefined();
    });
});
