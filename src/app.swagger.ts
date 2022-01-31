import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('SSTestBE API')
    .addBearerAuth()
    .setDescription(
      'Esta es el API Backend para la prueba tecnica correspondiente al proceso de seleccion para la compañia SmartSoft',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig, {});
  SwaggerModule.setup('/docs', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    },
  });
};
