import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceDetailController } from './invoice-detail.controller';
import { InvoiceDetailService } from './invoice-detail.service';

describe('InvoiceDetailController', () => {
  let controller: InvoiceDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvoiceDetailController],
      providers: [InvoiceDetailService],
    }).compile();

    controller = module.get<InvoiceDetailController>(InvoiceDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
