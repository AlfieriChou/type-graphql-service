import { Min, Max } from 'class-validator'
import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class PaginationInput {
  @Field(type => Int)
  @Min(1)
  page!: number

  @Field(type => Int)
  @Min(10)
  @Max(100)
  size!: number
}