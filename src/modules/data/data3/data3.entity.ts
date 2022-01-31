import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('table_data_3')
export class Data3 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  T3C1: number;

  @Column({ type: 'varchar', length: 50 })
  T3C2: string;

  @Column({ type: 'datetime' })
  T3C3: Date;
}
