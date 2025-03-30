import { IsOptional, IsString, IsEnum } from 'class-validator';
import { Forjador } from '../enums/forjador.enum';

export class UpdateRingDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  poder?: string;

  @IsOptional()
  @IsString()
  portador?: string;

  @IsOptional()
  @IsEnum(Forjador)
  forjadoPor?: Forjador;

  @IsOptional()
  @IsString()
  imagem?: string;
}
