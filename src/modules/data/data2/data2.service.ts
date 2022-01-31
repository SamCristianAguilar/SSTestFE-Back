import { EditData2Dto } from './dtos/edit-data2.dto';
import { Data2Dto } from './dtos/data2.dto';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Data2 } from './data2.entity';

@Injectable()
export class Data2Service {
  constructor(
    @InjectRepository(Data2)
    private readonly _data2Repository: Repository<Data2>,
  ) {}

  async getAll() {
    return await this._data2Repository.find();
  }
  async getById(id: number) {
    const data2 = await this._data2Repository.findOne(id);

    if (!data2) throw new NotFoundException('Records not found.');

    return data2;
  }

  async createOne(dto: Data2Dto) {
    const newData2 = this._data2Repository.create({
      T2C1: dto.T2C1,
      T2C2: dto.T2C2,
      T2C3: dto.T2C3,
      T2C4: dto.T2C4,
      T2C5: dto.T2C5,
    });

    console.log(newData2);

    const response = await this._data2Repository.save(newData2);

    if (!response) throw new BadRequestException('Error saving record.');

    return response;
  }

  async editOne(id: number, dto: EditData2Dto) {
    const data2Exist = await this.getById(id);

    const data2Edit = Object.assign(data2Exist, dto);

    const response = await this._data2Repository.save(data2Edit);

    if (!response) throw new BadRequestException('Error saving record.');

    return response;
  }

  async deleteOne(id: number) {
    const data2 = await this.getById(id);

    return await this._data2Repository.delete(data2);
  }
}
