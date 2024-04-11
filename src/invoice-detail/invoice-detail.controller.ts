import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvoiceDetailService } from './invoice-detail.service';
import { CreateInvoiceDetailDto } from './dto/create-invoice-detail.dto';
import { UpdateInvoiceDetailDto } from './dto/update-invoice-detail.dto';

@Controller('invoice-detail')
export class InvoiceDetailController {
  constructor(private readonly invoiceDetailService: InvoiceDetailService) {}

  @Post()
  create(@Body() createInvoiceDetailDto: CreateInvoiceDetailDto) {
    return this.invoiceDetailService.create(createInvoiceDetailDto);
  }

  @Get()
  findAll() {
    return this.invoiceDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoiceDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvoiceDetailDto: UpdateInvoiceDetailDto) {
    return this.invoiceDetailService.update(+id, updateInvoiceDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invoiceDetailService.remove(+id);
  }
}
