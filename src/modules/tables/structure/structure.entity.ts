import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Table } from './../table/table.entity';

@Entity('table_structure')
export class Structure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: '20' })
  header: string;

  @Column({ type: 'varchar', length: '10' })
  dataType: string;

  @Column({ type: 'varchar', length: '20', nullable: true })
  format: string;

  @Column({ type: 'boolean' })
  required: boolean;

  @ManyToOne(() => Table, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'table_type_id' })
  table: Table;
}
