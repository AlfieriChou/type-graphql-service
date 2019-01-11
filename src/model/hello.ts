import { ObjectType, Field, InputType, Int } from 'type-graphql'

@ObjectType()
export class Demo {
  @Field(() => Int)
  id?: number

  @Field()
  text?: string

  @Field()
  title?: string

  @Field(() => Date)
  created_at?: Date

  @Field(() => Date)
  uodated_at?: Date

  @Field()
  deleted_at?: Date
}

@InputType()
export class DemoInput implements Partial<Demo> {
  @Field()
  text?: string
}
