import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { Edital } from '@generated/prisma';

@Injectable()
export class ModalidadeLicitaçãoPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (!value) {
            throw new BadRequestException('Modalidade de licitação é obrigatória');
        }

        if (!Object.values(Edital.).includes(value)) {
            throw new BadRequestException(
                `Modalidade de licitação inválida. Valores aceitos: ${Object.values(ModalidadeLicitação).join(', ')}`
            );
        }

        return value;
    }
} 