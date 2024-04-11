import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'price' })
  price: number;

  @Column()
  stock: number;

  @Column()
  isActive: boolean;

  @OneToMany(() => Product, (product) => product.id)
  details: Product[];
}
