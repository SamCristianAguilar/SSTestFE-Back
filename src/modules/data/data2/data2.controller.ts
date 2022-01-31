import { EditData2Dto } from './dtos/edit-data2.dto';
import { Data2Service } from './data2.service';
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
import { Data2Dto } from './dtos';

@ApiTags('TableData2')
@Controller('TableData2')
export class Data2Controller {
  constructor(private readonly _data2Service: Data2Service) {}

  @Get()
  async getAll() {
    return await this._data2Service.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this._data2Service.getById(id);
  }

  @Post()
  async createOne(@Body() dto: Data2Dto) {
    return await this._data2Service.createOne(dto);
  }

  @Put(':id')
  async editOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: EditData2Dto,
  ) {
    return await this._data2Service.editOne(id, dto);
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    return await this._data2Service.deleteOne(id);
  }
}
