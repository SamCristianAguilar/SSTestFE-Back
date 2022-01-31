/* eslint-disable @typescript-eslint/no-unused-vars */
import { TableDto } from './dtos/table.dto';
import { TableService } from './table.service';
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
import { EditTableDto } from './dtos';

@ApiTags('Tables')
@Controller('table')
export class TableController {
  constructor(private readonly _tableService: TableService) {}

  @Get()
  async getAll() {
    return await this._tableService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this._tableService.getById(id);
  }

  @Post()
  async createOne(@Body() dto: TableDto) {
    return await this._tableService.createOne(dto);
  }

  @Put(':id')
  async editOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: EditTableDto,
  ) {
    return await this._tableService.editOne(id, dto);
  }

  // @Delete(':id')
  // async deleteOne(@Param('id', ParseIntPipe) id: number) {
  //   return await this._tableService.deleteOne(id);
  // }
}
