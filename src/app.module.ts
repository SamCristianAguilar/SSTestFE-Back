import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StructureModule } from './modules/tables/structure/structure.module';
import { TableModule } from './modules/tables/table/table.module';

import { Data1Module } from './modules/data/data1/data1.module';
import { Data2Module } from './modules/data/data2/data2.module';
import { Data3Module } from './modules/data/data3/data3.module';

import databaseConfig from './common/init/database.config';

import { TYPEORM_CONFIG } from './common/init/constants';

import * as Joi from '@hapi/joi';

@Module({
  imports: [
    Data1Module,
    Data2Module,
    Data3Module,
    StructureModule,
    TableModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`, // .env.development
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
      }),
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        config.get<TypeOrmModuleOptions>(TYPEORM_CONFIG),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
