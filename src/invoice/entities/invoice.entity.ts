import { Customer } from 'src/customer/entities/customer.entity';
import { InvoiceDetail } from 'src/invoice-detail/entities/invoice-detail.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('invoice')
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  invoiceNumber: string;

  @Column()
  date: Date;

  @ManyToOne(() => Customer, (customer) => customer.invoice)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(() => InvoiceDetail, (detail) => detail.invoice)
  @JoinColumn({ name: 'detail_id' })
  details: InvoiceDetail[];

  @Column()
  isActive: boolean;

  @BeforeInsert()
  setDate() {
    this.date = new Date();
  }
}
