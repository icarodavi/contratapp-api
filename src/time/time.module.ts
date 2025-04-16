import { Module } from '@nestjs/common';
import { TimeGateway } from './time.gateway';
import { AuthModule } from '@/auth/auth.module';

@Module({
    imports: [AuthModule],
    providers: [TimeGateway],
    exports: [TimeGateway]
})
export class TimeModule {} 