import { EditData1Dto } from './dtos/edit-data1.dto';
import { Data1Dto } from './dtos/data1.dto';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Data1 } from './data1.entity';

@Injectable()
export class Data1Service {
  constructor(
    @InjectRepository(Data1)
    private readonly _data1Repository: Repository<Data1>,
  ) {}

  async getAll() {
    return await this._data1Repository.find();
  }
  async getById(id: number) {
    const data1 = await this._data1Repository.findOne(id);

    if (!data1) throw new NotFoundException('Records not found.');

    return data1;
  }

  async createOne(dto: Data1Dto) {
    const newData1 = this._data1Repository.create({
      T1C1: dto.T1C1,
      T1C2: dto.T1C2,
      T1C3: dto.T1C3,
      T1C4: dto.T1C4,
    });

    const response = await this._data1Repository.save(newData1);

    if (!response) throw new BadRequestException('Error saving record.');

    return response;
  }

  async editOne(id: number, dto: EditData1Dto) {
    const data1Exist = await this.getById(id);

    const data1Edit = Object.assign(data1Exist, dto);

    const response = await this._data1Repository.save(data1Edit);

    if (!response) throw new BadRequestException('Error saving record.');

    return response;
  }

  async deleteOne(id: number) {
    const data1 = await this.getById(id);

    return await this._data1Repository.delete(data1);
  }
}
