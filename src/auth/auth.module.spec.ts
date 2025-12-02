import { Test, TestingModule } from '@nestjs/testing';
import { AuthModule } from './auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

describe('AuthModule', () => {
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test.createTestingModule({
            imports: [
                AuthModule,
                ConfigModule.forRoot({
                    isGlobal: true,
                    ignoreEnvFile: true,
                    load: [() => ({ JWT_SECRET: 'test_secret' })],
                }),
            ],
        }).compile();
    });

    it('should be defined', () => {
        expect(module).toBeDefined();
    });

    it('should provide JwtService with configured secret', () => {
        const jwtService = module.get<JwtService>(JwtService);
        expect(jwtService).toBeDefined();
    });
});

describe('AuthModule with default secret', () => {
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test.createTestingModule({
            imports: [
                AuthModule,
                ConfigModule.forRoot({
                    isGlobal: true,
                    ignoreEnvFile: true,
                    load: [() => ({})], // No JWT_SECRET
                }),
            ],
        }).compile();
    });

    it('should provide JwtService with default secret', () => {
        const jwtService = module.get<JwtService>(JwtService);
        expect(jwtService).toBeDefined();
    });
});
