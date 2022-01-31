import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class TableDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Todos los campos son requeridos' })
  @IsString({
    message: 'El nombre de la propiedad debe estar en formato texto.',
  })
  name: string;
}
