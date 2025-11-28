import { JwtAuthGuard } from './auth.guard';

describe('JwtAuthGuard', () => {
    let guard: JwtAuthGuard;

    beforeEach(() => {
        guard = new JwtAuthGuard();
    });

    it('should be defined', () => {
        expect(guard).toBeDefined();
    });

    describe('handleRequest', () => {
        it('should return user if authenticated', () => {
            const user = { id: 'u1' };
            expect(guard.handleRequest(null, user)).toBe(user);
        });

        it('should throw error if error exists', () => {
            const err = new Error('Auth error');
            expect(() => guard.handleRequest(err, null)).toThrow(err);
        });

        it('should throw error if no user', () => {
            expect(() => guard.handleRequest(null, null)).toThrow('Não autorizado');
        });
    });
});
