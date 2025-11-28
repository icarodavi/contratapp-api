import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from './usuario.service';
import { PrismaService } from '../database/database.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { LoginDto } from './dto/auth.dto';
import { UpdateSenhaDto } from './dto/update-senha.dto';
import { NotFoundException, UnauthorizedException, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

jest.mock('bcryptjs', () => ({
    hash: jest.fn(),
    compare: jest.fn(),
}));

describe('UsuarioService', () => {
    let service: UsuarioService;
    let prismaService: PrismaService;
    let jwtService: JwtService;

    const mockPrismaService = {
        usuario: {
            findUnique: jest.fn(),
            findMany: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
        },
    };

    const mockJwtService = {
        sign: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsuarioService,
                {
                    provide: PrismaService,
                    useValue: mockPrismaService,
                },
                {
                    provide: JwtService,
                    useValue: mockJwtService,
                },
            ],
        }).compile();

        service = module.get<UsuarioService>(UsuarioService);
        prismaService = module.get<PrismaService>(PrismaService);
        jwtService = module.get<JwtService>(JwtService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
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

            mockPrismaService.usuario.findUnique.mockResolvedValue(null);
            mockPrismaService.usuario.create.mockResolvedValue(usuarioCriado);
            (bcrypt.hash as jest.Mock).mockResolvedValue('hashedPassword');

            const result = await service.create(createUsuarioDto);

            expect(result).toEqual(usuarioCriado);
            expect(mockPrismaService.usuario.findUnique).toHaveBeenCalledWith({
                where: { email: createUsuarioDto.email },
            });
            expect(mockPrismaService.usuario.create).toHaveBeenCalledWith({
                data: {
                    ...createUsuarioDto,
                    senha: 'hashedPassword',
                },
            });
        });

        it('deve lançar erro quando email já existe', async () => {
            const createUsuarioDto: CreateUsuarioDto = {
                nome: 'Teste',
                email: 'teste@teste.com',
                senha: 'senha123',
                perfil: 'ADMIN',
            };

            mockPrismaService.usuario.findUnique.mockResolvedValue({
                id: '1',
                ...createUsuarioDto,
            });

            await expect(service.create(createUsuarioDto)).rejects.toThrow(ConflictException);
        });
    });

    describe('findAll', () => {
        it('deve retornar todos os usuários', async () => {
            const usuarios = [
                { id: '1', nome: 'Teste 1', email: 'teste1@teste.com' },
                { id: '2', nome: 'Teste 2', email: 'teste2@teste.com' },
            ];

            mockPrismaService.usuario.findMany.mockResolvedValue(usuarios);

            const result = await service.findAll();

            expect(result).toEqual(usuarios);
            expect(mockPrismaService.usuario.findMany).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('deve retornar um usuário pelo ID', async () => {
            const usuario = {
                id: '1',
                nome: 'Teste',
                email: 'teste@teste.com',
            };

            mockPrismaService.usuario.findUnique.mockResolvedValue(usuario);

            const result = await service.findOne('1');

            expect(result).toEqual(usuario);
            expect(mockPrismaService.usuario.findUnique).toHaveBeenCalledWith({
                where: { id: '1' },
            });
        });

        it('deve lançar erro quando usuário não encontrado', async () => {
            mockPrismaService.usuario.findUnique.mockResolvedValue(null);

            await expect(service.findOne('1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('login', () => {
        it('deve realizar login com sucesso', async () => {
            const loginDto: LoginDto = {
                email: 'teste@teste.com',
                senha: 'senha123',
            };

            const usuario = {
                id: '1',
                nome: 'Teste',
                email: 'teste@teste.com',
                senha: 'hashedPassword',
                perfil: 'ADMIN',
            };

            mockPrismaService.usuario.findUnique.mockResolvedValue(usuario);
            (bcrypt.compare as jest.Mock).mockResolvedValue(true);
            mockJwtService.sign.mockReturnValue('jwtToken');

            const result = await service.login(loginDto);

            expect(result).toEqual({
                access_token: 'jwtToken',
                usuario: expect.objectContaining({
                    id: '1',
                    nome: 'Teste',
                    email: 'teste@teste.com',
                    perfil: 'ADMIN',
                }),
            });
        });

        it('deve lançar erro quando credenciais são inválidas', async () => {
            const loginDto: LoginDto = {
                email: 'teste@teste.com',
                senha: 'senha123',
            };

            mockPrismaService.usuario.findUnique.mockResolvedValue(null);

            await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
        });
    });

    describe('updateSenha', () => {
        it('deve atualizar a senha com sucesso', async () => {
            const updateSenhaDto: UpdateSenhaDto = {
                senhaAtual: 'senha123',
                novaSenha: 'novaSenha123',
            };

            const usuario = {
                id: '1',
                senha: 'hashedPassword',
            };

            mockPrismaService.usuario.findUnique.mockResolvedValue(usuario);
            (bcrypt.compare as jest.Mock).mockResolvedValue(true);
            (bcrypt.hash as jest.Mock).mockResolvedValue('newHashedPassword');
            mockPrismaService.usuario.update.mockResolvedValue({
                ...usuario,
                senha: 'newHashedPassword',
            });

            const result = await service.updateSenha('1', updateSenhaDto);

            expect(result).toEqual({
                ...usuario,
                senha: 'newHashedPassword',
            });
            expect(mockPrismaService.usuario.update).toHaveBeenCalledWith({
                where: { id: '1' },
                data: { senha: 'newHashedPassword' },
            });
        });

        it('deve lançar erro quando senha atual é incorreta', async () => {
            const updateSenhaDto: UpdateSenhaDto = {
                senhaAtual: 'senha123',
                novaSenha: 'novaSenha123',
            };

            const usuario = {
                id: '1',
                senha: 'hashedPassword',
            };

            mockPrismaService.usuario.findUnique.mockResolvedValue(usuario);
            (bcrypt.compare as jest.Mock).mockResolvedValue(false);

            await expect(service.updateSenha('1', updateSenhaDto)).rejects.toThrow(UnauthorizedException);
        });
    });
});