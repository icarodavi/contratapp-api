import { Module } from '@nestjs/common';
import { DisputaService } from './disputa.service';
import { DisputaController } from './disputa.controller';
import { PrismaService } from '../database/database.service';

import { ChatModule } from '../chat/chat.module';

@Module({
    imports: [ChatModule],
    controllers: [DisputaController],
    providers: [DisputaService, PrismaService],
    exports: [DisputaService]
})
export class DisputaModule {} 