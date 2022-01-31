import { PartialType } from '@nestjs/swagger';
import { StructureTableDto } from './structure.dto';

export class EditStructureTableDto extends PartialType(StructureTableDto) {}
