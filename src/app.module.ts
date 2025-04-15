import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { PropostaModule } from './proposta/proposta.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EditalModule } from './edital/edital.module';
import { PrismaModule } from './database/database.module';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [
    PropostaModule,
    UsuarioModule,
    EditalModule,
    PrismaModule,
    AuthModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
