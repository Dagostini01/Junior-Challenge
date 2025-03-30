import { IsEnum, IsString, IsNotEmpty } from 'class-validator';
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

  @IsNotEmpty()
  @IsEnum(Forjador)
  forjadoPor: Forjador;

  @IsNotEmpty()
  @IsString()
  imagem: string;
}
