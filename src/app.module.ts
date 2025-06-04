import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/database.service';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EditalModule } from './edital/edital.module';
import { DisputaModule } from './disputa/disputa.module';
import { LicitanteModule } from './licitante/licitante.module';
import { DocumentoModule } from './documento/documento.module';
import { DocumentoLicitanteModule } from './documento-licitante/documento-licitante.module';
import { DocumentoObrigatorioModule } from './documento-obrigatorio/documento-obrigatorio.module';
import { LogAtividadeModule } from './log-atividade/log-atividade.module';
import { LoteModule } from './lote/lote.module';
import { ItemModule } from './item/item.module';
import { RecursoModule } from './recurso/recurso.module';
import { SancaoModule } from './sancao/sancao.module';
import { PrazoModule } from './prazo/prazo.module';
import { PropostaModule } from './proposta/proposta.module';
import { TimeModule } from './time/time.module';
import { ChatModule } from './chat/chat.module';
import { LanceModule } from './lance/lance.module';

@Module({
  imports: [
    AuthModule,
    UsuarioModule,
    EditalModule,
    DisputaModule,
    LicitanteModule,
    DocumentoModule,
    DocumentoLicitanteModule,
    DocumentoObrigatorioModule,
    LogAtividadeModule,
    LoteModule,
    ItemModule,
    RecursoModule,
    SancaoModule,
    PrazoModule,
    PropostaModule,
    TimeModule,
    ChatModule,
    LanceModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
