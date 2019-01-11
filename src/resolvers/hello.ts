import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { Hello, HelloInput } from '../model/hello'
import { BaseResolver } from '../common/base_resolvers'
import { PaginationInput } from '../model/pagination';

@Resolver()
export class HelloResolver extends BaseResolver {
  @Query(() => Hello)
  async hello() {
    return {
      result: 'Hello World!'
    }
  }

  @Mutation(() => Hello)
  async hehe(
    @Arg('input') helloInput: HelloInput,
    @Arg('pagination', { nullable: true }) paginationInput?: PaginationInput
  ): Promise<Hello> {
    console.log('------>', paginationInput)
    return helloInput
  }
}
