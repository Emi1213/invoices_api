import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const newCustomer = this.customerRepository.create(createCustomerDto);
    return await this.customerRepository.save(newCustomer);
  }

  async findAll() {
    return await this.customerRepository.find();
  }

  async findOne(id: number) {
    return await this.customerRepository.findOneBy({ id });
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    await this.customerRepository.update({ id }, updateCustomerDto);
    return await this.customerRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const customer = await this.customerRepository.findOneBy({ id });
    if (!customer) {
      throw new Error('Customer not found');
    }
    customer.isActive = false;
    return await this.customerRepository.save(customer);
  }
}
