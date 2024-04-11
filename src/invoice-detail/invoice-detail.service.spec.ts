import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceDetailService } from './invoice-detail.service';

describe('InvoiceDetailService', () => {
  let service: InvoiceDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvoiceDetailService],
    }).compile();

    service = module.get<InvoiceDetailService>(InvoiceDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
