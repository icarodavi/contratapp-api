import { Module } from '@nestjs/common';
import { TimeGateway } from './time.gateway';
import { AuthModule } from '@/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DisputaModule } from '../disputa/disputa.module';

@Module({
    imports: [AuthModule, ConfigModule, DisputaModule],
    providers: [TimeGateway],
    exports: [TimeGateway]
})
export class TimeModule {}