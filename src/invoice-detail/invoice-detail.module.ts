import { Module } from '@nestjs/common';
import { InvoiceDetailService } from './invoice-detail.service';
import { InvoiceDetailController } from './invoice-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceDetail } from './entities/invoice-detail.entity';

@Module({
  controllers: [InvoiceDetailController],
  providers: [InvoiceDetailService],
  exports: [InvoiceDetailService],
  imports: [TypeOrmModule.forFeature([InvoiceDetail])],
})
export class InvoiceDetailModule {}
