import { TableDto } from './dtos/table.dto';

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Table } from './table.entity';
import { EditTableDto } from './dtos';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TableService {
  constructor(
    @InjectRepository(Table)
    private readonly _tableRepository: Repository<Table>,
  ) {}

  async getAll() {
    return await this._tableRepository.find({ relations: ['columns'] });
  }

  async getById(id: number) {
    const table = await this._tableRepository.findOne(id, {
      relations: ['columns'],
    });

    if (!table) throw new NotFoundException('Records not found.');

    return table;
  }

  async createOne(dto: TableDto) {
    const tableExist = await this._tableRepository.findOne({
      where: { name: dto.name },
    });

    if (tableExist)
      throw new BadRequestException(
        'A record with that name is already in the system.',
      );

    const response = await this._tableRepository.save(dto);

    if (!response) throw new BadRequestException('Error saving record.');

    return response;
  }

  async editOne(id: number, dto: EditTableDto) {
    const table = await this.getById(id);
    const tableEdit = Object.assign(table, dto);

    const response = await this._tableRepository.save(tableEdit);

    if (!response) throw new BadRequestException('Error saving record.');

    return response;
  }

  async deleteOne(id: number) {
    const table = await this.getById(id);

    return await this._tableRepository.delete(table);
  }
}
