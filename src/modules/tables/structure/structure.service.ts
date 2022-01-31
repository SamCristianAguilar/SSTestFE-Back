import { EditStructureTableDto } from './dtos/edit-structure.dto';
import { TableService } from './../table/table.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StructureTableDto } from './dtos';
import { Structure } from './structure.entity';

@Injectable()
export class StructureService {
  constructor(
    @InjectRepository(Structure)
    private readonly _structureRepository: Repository<Structure>,
    private readonly _tableService: TableService,
  ) {}

  async getAll() {
    return await this._structureRepository.find();
  }

  async getById(id: number) {
    const structure = await this._structureRepository.findOne(id);

    if (!structure) throw new NotFoundException('Records not found.');

    return structure;
  }

  async createOne(dto: StructureTableDto) {
    const table = await this._tableService.getById(dto.tableTypeId);

    const structureObject = new Structure();

    const newStructure = Object.assign(structureObject, dto);

    newStructure.table = table;

    const response = await this._structureRepository.save(newStructure);

    if (!response) throw new BadRequestException('Error saving record.');

    return response;
  }

  async editOne(id: number, dto: EditStructureTableDto) {
    const structure = await this.getById(id);

    const structureEdit = Object.assign(structure, dto);

    const response = await this._structureRepository.save(structureEdit);

    if (!response) throw new BadRequestException('Error saving record.');

    return response;
  }

  async deleteOne(id: number) {
    const structure = await this.getById(id);

    return await this._structureRepository.delete(structure);
  }
}
