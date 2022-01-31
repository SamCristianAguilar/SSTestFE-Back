export const TYPEORM_CONFIG = 'database.config';
export const SERVER_PORT = 'PORT';

export const TABLES = [
  {
    id: 1,
    name: 'Tabla 1',
    columns: [
      {
        id: 1,
        header: 'T1C1',
        dataType: 'Int',
        required: true,
      },
      {
        id: 2,
        header: 'T1C2',
        dataType: 'String',
        required: true,
      },
      {
        id: 3,
        header: 'T1C3',
        dataType: 'Int',
        required: false,
      },
      {
        id: 4,
        header: 'T1C4',
        dataType: 'Date',
        format: 'YYYY-MM-dd',
        required: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Tabla 2',
    columns: [
      {
        id: 5,
        header: 'T2C1',
        dataType: 'String',
        required: true,
      },
      {
        id: 6,
        header: 'T2C2',
        dataType: 'String',
        required: false,
      },
      {
        id: 7,
        header: 'T2C3',
        dataType: 'Int',
        required: false,
      },
      {
        id: 8,
        header: 'T2C4',
        dataType: 'Date',
        format: 'YYYY-dd-MM HH:mm:ss',
        required: true,
      },
      {
        id: 9,
        header: 'T2C5',
        dataType: 'Number',
        required: true,
      },
    ],
  },
  {
    id: 3,
    name: 'Tabla 3',
    columns: [
      {
        id: 10,
        header: 'T3C1',
        dataType: 'Int',
        required: true,
      },
      {
        id: 11,
        header: 'T3C2',
        dataType: 'String',
        required: true,
      },
      {
        id: 12,
        header: 'T3C3',
        dataType: 'Date',
        format: 'HH:mm:ss',
        required: true,
      },
    ],
  },
];
