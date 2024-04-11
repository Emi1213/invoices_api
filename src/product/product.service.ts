import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create({
      name: createProductDto.name,
      description: createProductDto.description,
      price: createProductDto.price,
      stock: createProductDto.stock,
      isActive: createProductDto.isActive,
    } as DeepPartial<Product>);
    return await this.productRepository.save(newProduct);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    return await this.productRepository.findOneBy({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.productRepository.update(id, {
      name: updateProductDto.name,
      description: updateProductDto.description,
      price: updateProductDto.price,
      stock: updateProductDto.stock,
      isActive: updateProductDto.isActive,
    } as DeepPartial<Product>);
    return await this.productRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new Error('Product not found');
    }
    product.isActive = false;
    return await this.productRepository.save(product);
  }
}
