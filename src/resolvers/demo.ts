import { Resolver, Query, Arg } from 'type-graphql'
import { Demo, DemoInput } from '../model/demo'
import { BaseResolver } from '../common/base_resolvers'
import { PaginationInput } from '../model/pagination'
import { DemoService } from '../service/demo'

@Resolver()
export class DemoResolver extends BaseResolver {
  @Query(() => Demo)
  async demoShow(
    @Arg('id') id: number
  ): Promise<Demo> {
    return await new DemoService().show(id)
  }

  @Query(() => [Demo] || [])
  async demoList(
    @Arg('filters', { nullable: true }) filters?: DemoInput,
    @Arg('pagination', { nullable: true }) pagination?: PaginationInput
  ): Promise<Demo[] | [] | undefined> {
    return await new DemoService().index(filters, pagination)
  }
}
