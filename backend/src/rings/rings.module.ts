import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ring } from './entities/ring.entity';
import { RingsService } from './rings.service';
import { RingsController } from './rings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ring])],
  providers: [RingsService],
  controllers: [RingsController],
})
export class RingsModule {}
