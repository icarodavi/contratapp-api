import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { LoginDto } from './dto/auth.dto';
import { UpdateSenhaDto } from './dto/update-senha.dto';
import { NotFoundException, UnauthorizedException, ConflictException } from '@nestjs/common';

describe('UsuarioController', () => {
    let controller: UsuarioController;
    let service: UsuarioService;

    const mockUsuarioService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        login: jest.fn(),
        updateSenha: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsuarioController],
            providers: [
                {
                    provide: UsuarioService,
                    useValue: mockUsuarioService,
                },
            ],
        }).compile();

        controller = module.get<UsuarioController>(UsuarioController);
        service = module.get<UsuarioService>(UsuarioService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('register', () => {
        it('deve criar um novo usuário com sucesso', async () => {
            const createUsuarioDto: CreateUsuarioDto = {
                nome: 'Teste',
                email: 'teste@teste.com',
                senha: 'senha123',
                perfil: 'ADMIN',
            };

            const usuarioCriado = {
                id: '1',
                ...createUsuarioDto,
                senha: 'hashedPassword',
            };

            mockUsuarioService.create.mockResolvedValue(usuarioCriado);

            const result = await controller.register(createUsuarioDto);

            expect(result).toEqual(usuarioCriado);
            expect(mockUsuarioService.create).toHaveBeenCalledWith(createUsuarioDto);
        });

        it('deve lançar erro quando email já existe', async () => {
            const createUsuarioDto: CreateUsuarioDto = {
                nome: 'Teste',
                email: 'teste@teste.com',
                senha: 'senha123',
                perfil: 'ADMIN',
            };

            mockUsuarioService.create.mockRejectedValue(new ConflictException());

            await expect(controller.register(createUsuarioDto)).rejects.toThrow(ConflictException);
        });
    });

    describe('findAll', () => {
        it('deve retornar todos os usuários', async () => {
            const usuarios = [
                { id: '1', nome: 'Teste 1', email: 'teste1@teste.com' },
                { id: '2', nome: 'Teste 2', email: 'teste2@teste.com' },
            ];

            mockUsuarioService.findAll.mockResolvedValue(usuarios);

            const result = await controller.findAll();

            expect(result).toEqual(usuarios);
            expect(mockUsuarioService.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('deve retornar um usuário pelo ID', async () => {
            const usuario = {
                id: '1',
                nome: 'Teste',
                email: 'teste@teste.com',
            };

            mockUsuarioService.findOne.mockResolvedValue(usuario);

            const result = await controller.findOne('1');

            expect(result).toEqual(usuario);
            expect(mockUsuarioService.findOne).toHaveBeenCalledWith('1');
        });

        it('deve lançar erro quando usuário não encontrado', async () => {
            mockUsuarioService.findOne.mockRejectedValue(new NotFoundException());

            await expect(controller.findOne('1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('login', () => {
        it('deve realizar login com sucesso', async () => {
            const loginDto: LoginDto = {
                email: 'teste@teste.com',
                senha: 'senha123',
            };

            const loginResponse = {
                access_token: 'jwtToken',
                usuario: {
                    id: '1',
                    nome: 'Teste',
                    email: 'teste@teste.com',
                    perfil: 'ADMIN',
                },
            };

            mockUsuarioService.login.mockResolvedValue(loginResponse);

            const result = await controller.login(loginDto);

            expect(result).toEqual(loginResponse);
            expect(mockUsuarioService.login).toHaveBeenCalledWith(loginDto);
        });

        it('deve lançar erro quando credenciais são inválidas', async () => {
            const loginDto: LoginDto = {
                email: 'teste@teste.com',
                senha: 'senha123',
            };

            mockUsuarioService.login.mockRejectedValue(new UnauthorizedException());

            await expect(controller.login(loginDto)).rejects.toThrow(UnauthorizedException);
        });
    });

    describe('updateSenha', () => {
        it('deve atualizar a senha com sucesso', async () => {
            const updateSenhaDto: UpdateSenhaDto = {
                senhaAtual: 'senha123',
                novaSenha: 'novaSenha123',
            };

            const usuarioAtualizado = {
                id: '1',
                nome: 'Teste',
                email: 'teste@teste.com',
                senha: 'newHashedPassword',
            };

            mockUsuarioService.updateSenha.mockResolvedValue(usuarioAtualizado);

            const result = await controller.updateSenha('1', updateSenhaDto);

            expect(result).toEqual(usuarioAtualizado);
            expect(mockUsuarioService.updateSenha).toHaveBeenCalledWith('1', updateSenhaDto);
        });

        it('deve lançar erro quando senha atual é incorreta', async () => {
            const updateSenhaDto: UpdateSenhaDto = {
                senhaAtual: 'senha123',
                novaSenha: 'novaSenha123',
            };

            mockUsuarioService.updateSenha.mockRejectedValue(new UnauthorizedException());

            await expect(controller.updateSenha('1', updateSenhaDto)).rejects.toThrow(UnauthorizedException);
        });
    });
}); 