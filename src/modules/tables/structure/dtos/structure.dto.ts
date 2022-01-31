import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { DataTypeEnum } from 'src/common/enums';
import { EnumToString } from 'src/common/helpers';

export class StructureTableDto {
  @ApiProperty()
  @IsNotEmpty({
    message: 'The table identifier is a required field.',
  })
  @IsNumber({}, { message: 'Invalid submission format.' })
  tableTypeId: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'header is a required field.' })
  @IsString({
    message: 'Enter a valid format.',
  })
  header: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'The dataType is required.' })
  @IsEnum(DataTypeEnum, {
    message: `Invalid option. The correct options are ${EnumToString(
      DataTypeEnum,
    )}`,
  })
  dataType: DataTypeEnum;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString({
    message: 'Enter a valid format.',
  })
  format?: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'format is a required.' })
  @IsBoolean({
    message: 'Enter a valid format.',
  })
  required: boolean;
}
