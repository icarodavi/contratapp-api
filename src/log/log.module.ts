import { Global, Module } from '@nestjs/common';
import { LogService } from './log.service';
import { PrismaService } from '../database/database.service';

@Global()
@Module({
    providers: [LogService, PrismaService],
    exports: [LogService],
})
export class LogModule {}
