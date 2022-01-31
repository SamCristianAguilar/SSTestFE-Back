/* eslint-disable @typescript-eslint/no-unused-vars */
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as fs from 'fs-extra';
import * as cors from 'cors';

import { generateTypeormConfigFile } from './scripts';
import { initSwagger } from './app.swagger';
import { SERVER_PORT } from './common/init/constants';

import { AppModule } from './app.module';
import rateLimit from 'express-rate-limit';
import { SetDefaultData } from './common/init/default-data';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  const config = app.get(ConfigService);
  const port = parseInt(config.get<string>(SERVER_PORT), 10) || 3050;

  await SetDefaultData.initTable();
  await SetDefaultData.initDataTable1();
  await SetDefaultData.initDataTable2();
  await SetDefaultData.initDataTable3();

  initSwagger(app);
  generateTypeormConfigFile(config);

  const accessLogStream = fs.createWriteStream(__dirname + '/../morgan.log', {
    flags: 'a',
  });
  //app.use(morgan("common", { stream: accessLogStream }));
  app.use(morgan('dev'));
  app.use(helmet());
  app.enableCors();
  app.use(cors());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(port);
  logger.log(`Server is running in ${await app.getUrl()}`);
}
bootstrap();
