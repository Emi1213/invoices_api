import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
  ) {}
  async create(createInvoiceDto: CreateInvoiceDto) {
    const newInvoice = this.invoiceRepository.create({
      customer: createInvoiceDto.customerId,
      invoiceNumber: createInvoiceDto.invoiceNumber,
      isActive: createInvoiceDto.isActive,
    } as DeepPartial<Invoice>);
    return await this.invoiceRepository.save(newInvoice);
  }

  async findAll() {
    return await this.invoiceRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} invoice`;
  }

  async update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    await this.invoiceRepository.update(id, {
      customer: updateInvoiceDto.customerId,
      invoiceNumber: updateInvoiceDto.invoiceNumber,
      isActive: updateInvoiceDto.isActive,
    } as DeepPartial<Invoice>);
    return await this.invoiceRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const invoice = await this.invoiceRepository.findOneBy({ id });
    if (!invoice) {
      throw new Error('Invoice not found');
    }
    invoice.isActive = false;
    return await this.invoiceRepository.save(invoice);
  }
}
