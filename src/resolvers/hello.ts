import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { Demo, DemoInput } from '../model/hello'
import { BaseResolver } from '../common/base_resolvers'
import { PaginationInput } from '../model/pagination'
import { HelloService } from '../service/hello'

@Resolver()
export class HelloResolver extends BaseResolver {
  @Query(() => Demo)
  async hello() {
    return {
      result: 'Hello World!'
    }
  }

  @Mutation(() => Demo)
  async hehe(
    @Arg('filters', { nullable: true }) filters?: DemoInput,
    @Arg('pagination', { nullable: true }) pagination?: PaginationInput
  ): Promise<Demo[] | []> {
    const data = await new HelloService().index(filters, pagination)
    return data
  }
}
