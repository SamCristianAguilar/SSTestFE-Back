import { Table } from './table.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableController } from './table.controller';
import { TableService } from './table.service';

import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Table])],
  controllers: [TableController],
  providers: [TableService],
  exports: [TableService],
})
export class TableModule {}
