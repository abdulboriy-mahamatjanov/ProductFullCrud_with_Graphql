import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Products {
  @Field(() => String)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Float)
  price: number;

  @Field()
  color: string;
}
