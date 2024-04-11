import { IsNotEmpty } from 'class-validator';
import { Invoice } from 'src/invoice/entities/invoice.entity';
import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @OneToOne(() => Invoice, (invoice) => invoice.id)
  invoice: Invoice;
}
