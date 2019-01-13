import { ObjectType, Field, InputType, Int } from 'type-graphql'

@ObjectType()
export class Demo {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field({ nullable: true })
  text?: string

  @Field({ nullable: true })
  title?: string

  @Field(() => Date, { nullable: true })
  created_at?: Date

  @Field(() => Date, { nullable: true })
  updated_at?: Date

  @Field({ nullable: true })
  deleted_at?: Date
}

@InputType()
export class DemoInput implements Partial<Demo> {
  @Field()
  text?: string
}
