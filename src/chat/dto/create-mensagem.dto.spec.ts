import { CreateMensagemDto } from './create-mensagem.dto';
import { TipoAutorMensagem } from '@generated/prisma/client';

describe('CreateMensagemDto', () => {
    it('should be defined', () => {
        const dto = new CreateMensagemDto();
        expect(dto).toBeDefined();
    });

    it('should have properties', () => {
        const dto = new CreateMensagemDto();
        dto.editalId = 'e1';
        dto.autorId = 'u1';
        dto.tipoAutor = TipoAutorMensagem.PREGOEIRO;
        dto.conteudo = 'Hello';

        expect(dto.editalId).toBe('e1');
        expect(dto.autorId).toBe('u1');
        expect(dto.tipoAutor).toBe(TipoAutorMensagem.PREGOEIRO);
        expect(dto.conteudo).toBe('Hello');
    });
});
