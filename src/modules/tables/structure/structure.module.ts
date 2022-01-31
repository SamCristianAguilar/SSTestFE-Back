import { TableModule } from './../table/table.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StructureController } from './structure.controller';
import { StructureService } from './structure.service';
import { Module } from '@nestjs/common';
import { Structure } from './structure.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Structure]), TableModule],
  controllers: [StructureController],
  providers: [StructureService],
  exports: [StructureService],
})
export class StructureModule {}
