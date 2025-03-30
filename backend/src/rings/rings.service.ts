import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ring } from './entities/ring.entity';
import { CreateRingDto } from './dto/create-ring.dto';
import { UpdateRingDto } from './dto/update-ring.dto';
import { Forjador } from './enums/forjador.enum';

@Injectable()
export class RingsService {
  constructor(
    @InjectRepository(Ring)
    private readonly ringRepository: Repository<Ring>,
  ) {}

  async create(dto: CreateRingDto) {
    const limits: Record<Forjador, number> = {
      [Forjador.Elfos]: 3,
      [Forjador.Anoes]: 7,
      [Forjador.Homens]: 9,
      [Forjador.Sauron]: 1,
    };

    const count = await this.ringRepository.count({
      where: { forjadoPor: dto.forjadoPor },
    });
    const maxAllowed = limits[dto.forjadoPor];

    if (count >= maxAllowed) {
      return null;
    }

    const ring = this.ringRepository.create(dto);
    return this.ringRepository.save(ring);
  }

  findAll() {
    return this.ringRepository.find();
  }

  async update(id: string, dto: UpdateRingDto) {
    console.log('DTO recebido:', dto);
    if (Object.keys(dto).length === 0) {
      throw new Error('Nenhum dado enviado para atualizar.');
    }

    await this.ringRepository.update(id, dto);
    return this.ringRepository.findOne({ where: { id } });
  }

  async remove(id: string) {
    await this.ringRepository.delete(id);
    return { message: 'Anel removido com sucesso' };
  }
}
