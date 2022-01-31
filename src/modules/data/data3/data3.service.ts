import { EditData3Dto } from './dtos/edit-data3.dto';
import { Data3Dto } from './dtos/data3.dto';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Data3 } from './data3.entity';

@Injectable()
export class Data3Service {
  constructor(
    @InjectRepository(Data3)
    private readonly _data3Repository: Repository<Data3>,
  ) {}

  async getAll() {
    return await this._data3Repository.find();
  }
  async getById(id: number) {
    const data3 = await this._data3Repository.findOne({ where: { T3C1: id } });

    if (!data3) throw new NotFoundException('Records not found.');

    return data3;
  }

  async createOne(dto: Data3Dto) {
    const newData3 = this._data3Repository.create({
      T3C2: dto.T3C2,
      T3C3: dto.T3C3,
    });

    const response = await this._data3Repository.save(newData3);

    if (!response) throw new BadRequestException('Error saving record.');

    return response;
  }

  async editOne(id: number, dto: EditData3Dto) {
    const data3Exist = await this.getById(id);

    const data3Edit = Object.assign(data3Exist, dto);

    const response = await this._data3Repository.save(data3Edit);

    if (!response) throw new BadRequestException('Error saving record.');

    return response;
  }

  async deleteOne(id: number) {
    const data3 = await this.getById(id);

    return await this._data3Repository.delete(data3);
  }
}
