import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Forjador } from '../enums/forjador.enum';

@Entity('rings')
export class Ring {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  poder: string;

  @Column()
  portador: string;

  @Column({ type: 'enum', enum: Forjador })
  forjadoPor: Forjador;

  @Column()
  imagem: string;
}