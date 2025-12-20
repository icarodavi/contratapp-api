import { Module } from '@nestjs/common';
import { SecretariaService } from './secretaria.service';
import { SecretariaController } from './secretaria.controller';
import { DatabaseModule } from '@/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [SecretariaController],
    providers: [SecretariaService],
    exports: [SecretariaService]
})
export class SecretariaModule {}
