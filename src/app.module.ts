import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { PropostaModule } from './proposta/proposta.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EditalModule } from './edital/edital.module';
import { PrismaModule } from './database/database.module';
import { TimeModule } from './time/time.module';
import { DisputaModule } from './disputa/disputa.module';
// import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [
    PropostaModule,
    UsuarioModule,
    EditalModule,
    PrismaModule,
    AuthModule,
    ChatModule,
    TimeModule,
    DisputaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
