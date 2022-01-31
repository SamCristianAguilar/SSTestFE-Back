import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class Data1Dto {
  @ApiProperty()
  @IsNotEmpty({ message: 'T1C1 is a required field' })
  @IsNumber({}, { message: 'Invalid submission format, format valid Number.' })
  T1C1: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'T1C2 is a required field' })
  @IsString({
    message: 'Invalid submission format, format valid String',
  })
  T1C2: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber({}, { message: 'Invalid submission format, format valid Number.' })
  T1C3?: number;

  @ApiProperty({ required: false, format: 'Date' })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  T1C4?: Date;
}
