import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { Demo, DemoInput } from '../model/demo'
import { BaseResolver } from '../common/base_resolvers'
import { PaginationInput } from '../model/pagination'
import { DemoService } from '../service/demo'

@Resolver()
export class DemoResolver extends BaseResolver {
  @Query(() => Demo)
  async Demo() {
    return {
      result: 'Demo World!'
    }
  }

  @Mutation(() => [Demo] || [])
  async hehe(
    @Arg('filters', { nullable: true }) filters?: DemoInput,
    @Arg('pagination', { nullable: true }) pagination?: PaginationInput
  ): Promise<Demo[] | [] | undefined> {
    return await new DemoService().index(filters, pagination)
  }
}
