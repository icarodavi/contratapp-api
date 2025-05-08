import { Module } from '@nestjs/common';
import { TimeGateway } from './time.gateway';
import { AuthModule } from '@/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [AuthModule, ConfigModule],
    providers: [TimeGateway],
    exports: [TimeGateway]
})
export class TimeModule {} 