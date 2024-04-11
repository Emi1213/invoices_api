import { Injectable } from '@nestjs/common';
import { CreateInvoiceDetailDto } from './dto/create-invoice-detail.dto';
import { UpdateInvoiceDetailDto } from './dto/update-invoice-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoiceDetail } from './entities/invoice-detail.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class InvoiceDetailService {
  constructor(
    @InjectRepository(InvoiceDetail)
    private readonly invoiceDetailRepository: Repository<InvoiceDetail>,
  ) {}

  async create(createInvoiceDetailDto: CreateInvoiceDetailDto) {
    const newInvoiceDetail = this.invoiceDetailRepository.create({
      product: createInvoiceDetailDto.product,
      quantity: createInvoiceDetailDto.quantity,
      isActive: createInvoiceDetailDto.isActive,
      invoice: createInvoiceDetailDto.invoiceId,
    } as DeepPartial<InvoiceDetail>);
    return await this.invoiceDetailRepository.save(newInvoiceDetail);
  }

  async findAll() {
    return await this.invoiceDetailRepository.find();
  }

  async findOne(id: number) {
    return await this.invoiceDetailRepository.findOneBy({ id });
  }

  async update(id: number, updateInvoiceDetailDto: UpdateInvoiceDetailDto) {
    await this.invoiceDetailRepository.update(id, {
      product: updateInvoiceDetailDto.product,
      quantity: updateInvoiceDetailDto.quantity,
      isActive: updateInvoiceDetailDto.isActive,
    } as DeepPartial<InvoiceDetail>);
    return await this.invoiceDetailRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const invoiceDetail = await this.invoiceDetailRepository.findOneBy({ id });
    if (!invoiceDetail) {
      throw new Error('Invoice not found');
    }
    invoiceDetail.isActive = false;
    return await this.invoiceDetailRepository.save(invoiceDetail);
  }
}
