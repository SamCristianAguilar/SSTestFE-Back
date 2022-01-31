import { PartialType } from '@nestjs/swagger';
import { Data1Dto } from '.';

export class EditData1Dto extends PartialType(Data1Dto) {}
