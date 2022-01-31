import { Data3 } from './../../modules/data/data3/data3.entity';
import { Data2 } from './../../modules/data/data2/data2.entity';
import { Structure } from './../../modules/tables/structure/structure.entity';
import { Table } from './../../modules/tables/table/table.entity';
import { getRepository } from 'typeorm';
import { TABLES } from './constants';
import { dataTable1, dataTable2, dataTable3 } from './data';
import { Data1 } from 'src/modules/data/data1/data1.entity';

export class SetDefaultData {
  static initDataTable1 = async () => {
    const data = dataTable1;
    const dt1Repository = getRepository<Data1>(Data1);
    const arrayData: Data1[] = [];

    data.forEach((element) => {
      const date = new Date();

      const newRow = dt1Repository.create({
        T1C1: element.T1C1,
        T1C2: element.T1C2,
        T1C3: element.T1C3,
        T1C4: date,
      });
      arrayData.push(newRow);
    });
    await dt1Repository.save(arrayData);
  };
  static initDataTable2 = async () => {
    const data = dataTable2;
    const dt2Repository = getRepository<Data2>(Data2);
    const arrayData: Data2[] = [];

    data.forEach((element) => {
      const date = new Date();
      const newRow = dt2Repository.create({
        T2C1: element.T2C1,
        T2C2: element.T2C2,
        T2C3: element.T2C3,
        T2C4: date,
        T2C5: element.T2C5,
      });
      arrayData.push(newRow);
    });
    await dt2Repository.save(arrayData);
  };
  static initDataTable3 = async () => {
    const data = dataTable3;
    const dt3Repository = getRepository<Data3>(Data3);
    const arrayData: Data3[] = [];

    data.forEach((element) => {
      const date = new Date();
      const newRow = dt3Repository.create({
        T3C1: element.T3C1,
        T3C2: element.T3C2,
        T3C3: date,
      });
      arrayData.push(newRow);
    });
    await dt3Repository.save(arrayData);
  };
  static initTable = async () => {
    const data = TABLES;
    const tableRepository = getRepository<Table>(Table);
    const structureRepository = getRepository<Structure>(Structure);

    for (const i in data) {
      const tableExist = await tableRepository.findOne({
        where: { name: data[i].name },
      });
      if (!tableExist) {
        const newTable = tableRepository.create({
          name: data[i].name,
        });
        const response = await tableRepository.save(newTable);

        if (response) {
          const dataColumns = data[i].columns;

          for (const j in dataColumns) {
            const dataC = dataColumns[j];
            const colums = structureRepository.create({
              header: dataC.header,
              dataType: dataC.dataType,
              format: dataC.format,
              required: dataC.required,
              table: response,
            });

            await structureRepository.save(colums);
          }
        }
      }
    }
  };
}
