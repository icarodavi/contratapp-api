import { DocumentoLicitanteDto } from './documento-licitante.dto';

describe('DocumentoLicitanteDto', () => {
    it('should be defined', () => {
        const dto = new DocumentoLicitanteDto();
        expect(dto).toBeDefined();
    });
});
