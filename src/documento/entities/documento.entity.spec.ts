import { Documento } from './documento.entity';

describe('Documento Entity', () => {
    it('should be defined', () => {
        const entity = new Documento();
        expect(entity).toBeDefined();
    });
});
