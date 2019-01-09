import { ObjectType, Field, InputType } from 'type-graphql'

@ObjectType()
export class Hello {
  @Field()
  result!: string
}

@InputType()
export class HelloInput implements Partial<Hello> {
  @Field()
  result!: string
}
