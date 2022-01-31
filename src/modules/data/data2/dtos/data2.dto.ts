import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class Data2Dto {
  @ApiProperty({ required: false })
  @IsNotEmpty({ message: 'Field T2C1 is a required field' })
  @IsString({
    message: 'Invalid submission format, format valid String',
  })
  T2C1: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString({
    message: 'Invalid submission format, format valid String',
  })
  T2C2?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber({}, { message: 'Invalid submission format, format valid Number.' })
  T2C3?: number;

  @ApiProperty({ format: 'Date' })
  @IsNotEmpty({ message: 'Field T2C4 is a required field' })
  @IsDate()
  @Type(() => Date)
  T2C4?: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'Field T2C5 is a required field' })
  @IsNumber({}, { message: 'Invalid submission format, format valid Number.' })
  T2C5: number;
}
