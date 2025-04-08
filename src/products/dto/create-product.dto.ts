import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateProductDto {
  @ApiProperty({ example: '12wjjn1inee42n12_21wdjww' })
  @Field(() => String)
  id: string;

  @ApiProperty({ example: 'Apple' })
  @IsString({ message: 'Product Name must be a string ❗' })
  @IsNotEmpty({ message: 'Product name is required ❗' })
  @Field()
  name: string;

  @IsString({ message: 'Product Description must be a string ❗' })
  @IsNotEmpty({ message: 'Product Description is required ❗' })
  @ApiProperty({ example: 'Very sweet' })
  @Field()
  description: string;

  @ApiProperty({ example: 15000 })
  @IsNotEmpty({ message: 'Product Price is required ❗' })
  price: number;

  @ApiProperty({ example: 'red' })
  @IsString({ message: 'Product Color must be a string ❗' })
  @IsNotEmpty({ message: 'Product Color is required ❗' })
  color: string;
}
