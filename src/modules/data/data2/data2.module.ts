import { TypeOrmModule } from '@nestjs/typeorm';
import { Data2Controller } from './data2.controller';
import { Data2Service } from './data2.service';

import { Module } from '@nestjs/common';
import { Data2 } from './data2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Data2])],
  controllers: [Data2Controller],
  providers: [Data2Service],
  exports: [Data2Service],
})
export class Data2Module {}
