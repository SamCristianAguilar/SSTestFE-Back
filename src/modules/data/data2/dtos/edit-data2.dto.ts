import { PartialType } from '@nestjs/swagger';
import { Data2Dto } from '.';

export class EditData2Dto extends PartialType(Data2Dto) {}
