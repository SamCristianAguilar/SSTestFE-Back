/* eslint-disable @typescript-eslint/no-unused-vars */
import { EditStructureTableDto } from './dtos/edit-structure.dto';
import { StructureTableDto } from './dtos/structure.dto';
import { StructureService } from './structure.service';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ColumsTables')
@Controller('columns-tables')
export class StructureController {
  constructor(private readonly _structureService: StructureService) {}

  @Get()
  async getAll() {
    return await this._structureService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this._structureService.getById(id);
  }

  @Post()
  async createOne(@Body() dto: StructureTableDto) {
    return await this._structureService.createOne(dto);
  }

  @Put(':id')
  async editOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: EditStructureTableDto,
  ) {
    return await this._structureService.editOne(id, dto);
  }

  //   @Delete(':id')
  //   async deleteOne(@Param('id', ParseIntPipe) id: number) {
  //     return await this._structureService.deleteOne(id);
  //   }
}
