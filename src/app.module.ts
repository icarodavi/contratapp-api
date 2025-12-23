import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
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
import { ConfigModule } from '@nestjs/config';
import { RelatorioModule } from './relatorio/relatorio.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'; // Import APP_INTERCEPTOR
import { DatabaseModule } from './database/database.module';
import { ActivityLogInterceptor } from './common/interceptors/activity-log.interceptor'; // Import Interceptor
import { DashboardModule } from './dashboard/dashboard.module';
import { SecretariaModule } from './secretaria/secretaria.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { LogModule } from './log/log.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    DatabaseModule,
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
    RelatorioModule,
    SecretariaModule,
    CatalogoModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_INTERCEPTOR, // Register global interceptor
      useClass: ActivityLogInterceptor,
    },
  ],
})
export class AppModule {}
