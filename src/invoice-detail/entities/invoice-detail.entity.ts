import { Invoice } from 'src/invoice/entities/invoice.entity';
import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('invoice_detail')
export class InvoiceDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.details)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column()
  quantity: number;

  @Column()
  isActive: boolean;

  @ManyToOne(() => Invoice, (invoice) => invoice.details)
  @JoinColumn({ name: 'invoice_id' })
  invoice: Invoice;
}
