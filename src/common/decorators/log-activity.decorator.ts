import { SetMetadata } from '@nestjs/common';
import { TipoAtividade } from '@generated/prisma/client';

export const LOG_ACTIVITY_KEY = 'log_activity';

export interface LogActivityOptions {
    acao: string;
    tipo: TipoAtividade;
    modulo: string;
    detalhes?: string;
}

export const LogActivity = (options: LogActivityOptions) => SetMetadata(LOG_ACTIVITY_KEY, options);
