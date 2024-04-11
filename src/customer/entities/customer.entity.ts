import { Invoice } from 'src/invoice/entities/invoice.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  isActive: boolean;

  @ManyToOne(() => Invoice, (invoice) => invoice.customer)
  @JoinColumn({ name: 'invoice_id' })
  invoice: Invoice;
}
