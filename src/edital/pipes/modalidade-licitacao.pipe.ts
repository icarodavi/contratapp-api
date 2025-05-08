import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ModalidadeLicitação } from '@prisma/client';

@Injectable()
export class ModalidadeLicitaçãoPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (!value) {
            throw new BadRequestException('Modalidade de licitação é obrigatória');
        }

        if (!Object.values(ModalidadeLicitação).includes(value)) {
            console.log(value);
            throw new BadRequestException(
                `Modalidade de licitação inválida. Valores aceitos: ${Object.values(ModalidadeLicitação).join(', ')}`
            );
        }

        return value;
    }
} 