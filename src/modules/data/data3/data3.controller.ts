import { EditData3Dto } from './dtos/edit-data3.dto';
import { Data3Service } from './data3.service';
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
import { Data3Dto } from './dtos';

@ApiTags('TableData3')
@Controller('TableData3')
export class Data3Controller {
  constructor(private readonly _data3Service: Data3Service) {}

  @Get()
  async getAll() {
    return await this._data3Service.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this._data3Service.getById(id);
  }

  @Post()
  async createOne(@Body() dto: Data3Dto) {
    return await this._data3Service.createOne(dto);
  }

  @Put(':id')
  async editOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: EditData3Dto,
  ) {
    return await this._data3Service.editOne(id, dto);
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    return await this._data3Service.deleteOne(id);
  }
}
