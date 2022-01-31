import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('table_data_2')
export class Data2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  T2C1: string;

  @Column({ type: 'varchar', nullable: true })
  T2C2?: string;

  @Column({ nullable: true })
  T2C3?: number;

  @Column({ type: 'datetime' })
  T2C4: Date;

  @Column()
  T2C5: number;
}
