import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Data3Dto {
  @ApiProperty()
  @IsNotEmpty({ message: 'T1C3 is a required field' })
  @IsNumber({}, { message: 'Invalid submission format, format valid Number.' })
  T3C1: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'T1C2 is a required field' })
  @IsString({
    message: 'Invalid submission format, format valid String',
  })
  T3C2: string;

  @ApiProperty({ format: 'Date' })
  @IsNotEmpty({ message: 'Field T3C3 is a required field' })
  @IsDate()
  @Type(() => Date)
  T3C3: Date;
}
