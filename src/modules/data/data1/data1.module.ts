import { TypeOrmModule } from '@nestjs/typeorm';
import { Data1Controller } from './data1.controller';
import { Data1Service } from './data1.service';

import { Module } from '@nestjs/common';
import { Data1 } from './data1.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Data1])],
  controllers: [Data1Controller],
  providers: [Data1Service],
  exports: [Data1Service],
})
export class Data1Module {}
