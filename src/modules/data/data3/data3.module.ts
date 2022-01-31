import { TypeOrmModule } from '@nestjs/typeorm';
import { Data3Controller } from './data3.controller';
import { Data3Service } from './data3.service';

import { Module } from '@nestjs/common';
import { Data3 } from './data3.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Data3])],
  controllers: [Data3Controller],
  providers: [Data3Service],
  exports: [Data3Service],
})
export class Data3Module {}
