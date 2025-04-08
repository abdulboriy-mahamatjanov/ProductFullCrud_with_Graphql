import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductsResolver } from './products.resolver';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [ProductsService, ProductsResolver],
})

export class ProductsModule {}
