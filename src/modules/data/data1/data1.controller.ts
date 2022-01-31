import { EditData1Dto } from './dtos/edit-data1.dto';
import { Data1Service } from './data1.service';
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
import { Data1Dto } from './dtos';

@ApiTags('TableData1')
@Controller('TableData1')
export class Data1Controller {
  constructor(private readonly _data1Service: Data1Service) {}

  @Get()
  async getAll() {
    return await this._data1Service.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this._data1Service.getById(id);
  }

  @Post()
  async createOne(@Body() dto: Data1Dto) {
    return await this._data1Service.createOne(dto);
  }

  @Put(':id')
  async editOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: EditData1Dto,
  ) {
    return await this._data1Service.editOne(id, dto);
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    return await this._data1Service.deleteOne(id);
  }
}
