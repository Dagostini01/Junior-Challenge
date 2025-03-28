import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Forjador } from '../enums/forjador.enum';

export class CreateRingDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  poder: string;

  @IsNotEmpty()
  @IsString()
  portador: string;

  @IsEnum(Forjador)
  forjadoPor: Forjador;

  @IsNotEmpty()
  @IsString()
  imagem: string;
}