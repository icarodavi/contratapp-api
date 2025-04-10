import { Module } from '@nestjs/common';
import { EditalModule } from './edital/edital.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PrismaModule } from './database/database.module';
import { PropostaModule } from './proposta/proposta.module';

@Module({
  imports: [
    PrismaModule,
    EditalModule,
    UsuarioModule,
    PropostaModule
  ],
})
export class AppModule {}
