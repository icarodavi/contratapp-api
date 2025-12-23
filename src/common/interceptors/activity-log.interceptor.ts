import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LogService } from '../../log/log.service';
import { LOG_ACTIVITY_KEY, LogActivityOptions } from '../decorators/log-activity.decorator';

@Injectable()
export class ActivityLogInterceptor implements NestInterceptor {
    constructor(
        private reflector: Reflector,
        private logService: LogService
    ) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const options = this.reflector.get<LogActivityOptions>(LOG_ACTIVITY_KEY, context.getHandler());

        if (!options) {
            return next.handle();
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const ip = request.ip || request.connection.remoteAddress;
        const userAgent = request.headers['user-agent'];

        return next.handle().pipe(
            tap({
                next: async (data: any) => {
                    try {
                        let entidadeId: string | undefined = undefined;
                        let entidadeTipo: string | undefined = undefined;

                        // Tenta extrair ID da entidade da resposta (convenção: id no objeto retornado)
                        if (data && typeof data === 'object' && 'id' in data) {
                            entidadeId = data.id;
                            // Assume que o módulo é o tipo da entidade por padrão, se não definido explicitamente
                            entidadeTipo = options.modulo;
                        }

                        // Tenta extrair disputaId do body ou params se disponível
                        // Isso pode precisar de ajuste dependendo do endpoint
                        const disputaId = request.body?.disputaId || request.params?.disputaId || request.query?.disputaId || undefined;

                        await this.logService.create({
                            tipo: options.tipo,
                            acao: options.acao,
                            detalhes: options.detalhes,
                            modulo: options.modulo,
                            usuarioId: user?.id,
                            ip,
                            userAgent,
                            status: 'SUCESSO',
                            nivel: 'INFO',
                            disputaId: disputaId,
                            entidadeId,
                            entidadeTipo,
                            metadata: {
                                method: request.method,
                                url: request.url,
                            }
                        });
                    } catch (error) {
                        console.error('Erro ao salvar log de atividade:', error);
                    }
                },
                error: async (error) => {
                    try {
                        const disputaId = request.body?.disputaId || request.params?.disputaId || request.query?.disputaId || undefined;

                        await this.logService.create({
                            tipo: options.tipo,
                            acao: options.acao,
                            detalhes: `Erro: ${error.message}`,
                            modulo: options.modulo,
                            usuarioId: user?.id,
                            ip,
                            userAgent,
                            status: 'ERRO',
                            nivel: 'ERROR',
                            disputaId: disputaId,
                            metadata: {
                                method: request.method,
                                url: request.url,
                                error: error.stack
                            }
                        });
                    } catch (logError) {
                        console.error('Erro ao salvar log de erro:', logError);
                    }
                }
            })
        );
    }
}
