import { Test, TestingModule } from '@nestjs/testing';
import { JwtStrategy } from './jwt.strategy';
import { UsuarioService } from '../usuario.service';

describe('JwtStrategy', () => {
    let strategy: JwtStrategy;
    let usuarioService: UsuarioService;

    const mockUsuarioService = {
        findOne: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                JwtStrategy,
                { provide: UsuarioService, useValue: mockUsuarioService },
            ],
        }).compile();

        strategy = module.get<JwtStrategy>(JwtStrategy);
        usuarioService = module.get<UsuarioService>(UsuarioService);
    });

    it('should be defined', () => {
        expect(strategy).toBeDefined();
    });

    describe('validate', () => {
        it('should return user if found', async () => {
            const payload = { sub: 'u1' };
            const usuario = { id: 'u1' };
            mockUsuarioService.findOne.mockResolvedValue(usuario);

            const result = await strategy.validate(payload);
            expect(result).toEqual(usuario);
            expect(usuarioService.findOne).toHaveBeenCalledWith('u1');
        });

        it('should throw error if user not found', async () => {
            const payload = { sub: 'u1' };
            mockUsuarioService.findOne.mockRejectedValue(new Error('User not found'));

            await expect(strategy.validate(payload)).rejects.toThrow('User not found');
        });
    });
});
