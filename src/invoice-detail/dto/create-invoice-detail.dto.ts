import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateInvoiceDetailDto {
  @IsString()
  @IsNotEmpty()
  product: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  @IsNumber()
  @IsNotEmpty()
  invoiceId: number;
}
