import { Structure } from './../structure/structure.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'table' })
export class Table {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: '30', unique: true })
  name: string;

  @OneToMany(() => Structure, (structure) => structure.table, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  columns: Structure[];
}
