import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Products } from './entyty/product.entitie';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Resolver()
export class ProductsResolver {
  constructor(private product: ProductsService) {}

  @Mutation(() => Products)
  async create(@Args('createProductDto') createProductDto: CreateProductDto) {
    return await this.product.create(createProductDto);
  }

  @Query(() => [Products])
  async findAll() {
    return await this.product.findAll();
  }

  @Query(() => Products)
  async findOne(@Args('id') id: string) {
    return await this.product.findOne(id);
  }

  @Mutation(() => Products)
  async update(@Args('updateProductDto') updateProductDto: UpdateProductDto) {
    return await this.product.update(updateProductDto.id, updateProductDto);
  }

  @Mutation(() => Products)
  async remove(@Args('id') id: string) {
    return await this.product.remove(id);
  }
}
