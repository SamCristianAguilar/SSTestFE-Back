import { PartialType } from '@nestjs/swagger';
import { TableDto } from './table.dto';
export class EditTableDto extends PartialType(TableDto) {}
