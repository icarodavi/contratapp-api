import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { PrismaModule } from '@/database/database.module';

@Module({
    imports: [PrismaModule],
    controllers: [ItemController],
    providers: [ItemService],
    exports: [ItemService]
})
export class ItemModule {} 