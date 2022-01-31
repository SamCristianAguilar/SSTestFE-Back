import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('table_data_1')
export class Data1 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  T1C1: number;

  @Column({ type: 'varchar', length: 50 })
  T1C2: string;

  @Column({ nullable: true })
  T1C3?: number;

  @Column({ type: 'datetime', nullable: true })
  T1C4?: Date;
}
