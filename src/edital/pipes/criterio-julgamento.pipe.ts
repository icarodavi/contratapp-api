import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { CritérioJulgamento } from '@generated/prisma';

@Injectable()
export class CritérioJulgamentoPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (!value) {
            throw new BadRequestException('Critério de julgamento é obrigatório');
        }

        if (!Object.values(CritérioJulgamento).includes(value)) {
            throw new BadRequestException(
                `Critério de julgamento inválido. Valores aceitos: ${Object.values(CritérioJulgamento).join(', ')}`
            );
        }

        return value;
    }
} 