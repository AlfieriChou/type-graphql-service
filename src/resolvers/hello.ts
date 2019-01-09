import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { Hello, HelloInput } from '../model/hello'

@Resolver()
export class HelloResolver {
  @Query(() => Hello)
  async hello() {
    return {
      result: 'Hello World!'
    }
  }

  @Mutation(() => Hello)
  async hehe(@Arg('input') helloInput: HelloInput): Promise<Hello> {
    return helloInput
  }
}
