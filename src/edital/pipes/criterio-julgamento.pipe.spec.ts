import { CritérioJulgamentoPipe } from './criterio-julgamento.pipe';
import { BadRequestException } from '@nestjs/common';
import { CritérioJulgamento } from '@prisma/client';

describe('CritérioJulgamentoPipe', () => {
    let pipe: CritérioJulgamentoPipe;

    beforeEach(() => {
        pipe = new CritérioJulgamentoPipe();
    });

    it('should be defined', () => {
        expect(pipe).toBeDefined();
    });

    it('should throw BadRequestException if value is missing', () => {
        expect(() => pipe.transform(null, { type: 'body' })).toThrow(BadRequestException);
    });

    it('should throw BadRequestException if value is invalid', () => {
        expect(() => pipe.transform('INVALID_VALUE', { type: 'body' })).toThrow(BadRequestException);
    });

    it('should return value if valid', () => {
        const value = CritérioJulgamento.MENOR_PRECO;
        expect(pipe.transform(value, { type: 'body' })).toBe(value);
    });
});
