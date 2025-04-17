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
import { LicitanteModule } from './licitante/licitante.module';
import { DocumentoModule } from './documento/documento.module';
import { LoteModule } from './lote/lote.module';
import { ItemModule } from './item/item.module';
import { LogAtividadeModule } from './log-atividade/log-atividade.module';
import { SessaoModule } from './sessao/sessao.module';
import { PrazoModule } from './prazo/prazo.module';
import { SancaoModule } from './sancao/sancao.module';
import { RecursoModule } from './recurso/recurso.module';
import { DocumentoObrigatorioModule } from './documento-obrigatorio/documento-obrigatorio.module';
// import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [
    PrismaModule,
    PropostaModule,
    UsuarioModule,
    EditalModule,
    AuthModule,
    ChatModule,
    TimeModule,
    DisputaModule,
    LicitanteModule,
    DocumentoModule,
    PrazoModule,
    SancaoModule,
    RecursoModule,
    DocumentoObrigatorioModule,
    LoteModule,
    ItemModule,
    LogAtividadeModule,
    SessaoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
