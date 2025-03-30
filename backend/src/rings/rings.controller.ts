import {
  Controller,
  Post,
  Body,
  BadRequestException,
  Get,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { RingsService } from './rings.service';
import { CreateRingDto } from './dto/create-ring.dto';
import { UpdateRingDto } from './dto/update-ring.dto';

@Controller('rings')
export class RingsController {
  constructor(private readonly ringsService: RingsService) {}

  @Post()
  async create(@Body() dto: CreateRingDto) {
    const created = await this.ringsService.create(dto);
    if (!created) {
      throw new BadRequestException(
        'Limite de anéis para o forjador excedido.',
      );
    }
    return created;
  }

  @Get()
  findAll() {
    return this.ringsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateRingDto) {
    return this.ringsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ringsService.remove(id);
  }
}
