import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateInvoiceDto {
  @IsString()
  @IsNotEmpty()
  invoiceNumber: string;

  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
