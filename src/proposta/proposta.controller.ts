import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { PropostaService } from './proposta.service';
import { CreatePropostaDto } from './dto/create-proposta.dto';

@Controller('propostas')
export class PropostaController {
  constructor(private readonly propostaService: PropostaService) {}

  @Post()
  create(@Body() createPropostaDto: CreatePropostaDto) {
    return this.propostaService.create(createPropostaDto);
  }

  @Get()
  findAll() {
    return this.propostaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propostaService.findOne(id);
  }

  @Get('disputa/:disputaId')
  findByDisputa(@Param('disputaId') disputaId: string) {
    return this.propostaService.findByDisputa(disputaId);
  }
}
