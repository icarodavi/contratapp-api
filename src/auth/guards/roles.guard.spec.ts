import { RolesGuard } from './roles.guard';
import { Reflector } from '@nestjs/core';
import { ExecutionContext } from '@nestjs/common';
import { PerfilUsuario } from '@prisma/client';

describe('RolesGuard', () => {
    let guard: RolesGuard;
    let reflector: Reflector;

    beforeEach(() => {
        reflector = new Reflector();
        guard = new RolesGuard(reflector);
    });

    it('should be defined', () => {
        expect(guard).toBeDefined();
    });

    it('should return true if no roles are required', () => {
        jest.spyOn(reflector, 'getAllAndOverride').mockReturnValue(null);
        const context = {
            getHandler: jest.fn(),
            getClass: jest.fn(),
        } as unknown as ExecutionContext;
        expect(guard.canActivate(context)).toBe(true);
    });

    it('should return true if user has required role', () => {
        jest.spyOn(reflector, 'getAllAndOverride').mockReturnValue([PerfilUsuario.PREGOEIRO]);
        const context = {
            getHandler: jest.fn(),
            getClass: jest.fn(),
            switchToHttp: jest.fn().mockReturnValue({
                getRequest: jest.fn().mockReturnValue({
                    user: { perfil: PerfilUsuario.PREGOEIRO },
                }),
            }),
        } as unknown as ExecutionContext;
        expect(guard.canActivate(context)).toBe(true);
    });

    it('should return false if user does not have required role', () => {
        jest.spyOn(reflector, 'getAllAndOverride').mockReturnValue([PerfilUsuario.PREGOEIRO]);
        const context = {
            getHandler: jest.fn(),
            getClass: jest.fn(),
            switchToHttp: jest.fn().mockReturnValue({
                getRequest: jest.fn().mockReturnValue({
                    user: { perfil: PerfilUsuario.LICITANTE },
                }),
            }),
        } as unknown as ExecutionContext;
        expect(guard.canActivate(context)).toBe(false);
    });
});
