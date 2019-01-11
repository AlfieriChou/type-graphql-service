import { PaginationInput } from '../model/pagination'
import { DemoInput, Demo } from '../model/hello'
import { BaseService } from '../common/base_service'

export class HelloService extends BaseService {
  async index(
    filters: DemoInput = new DemoInput(),
    pagination: PaginationInput = new PaginationInput()
  ): Promise<Demo[] | []> {
    const sql = this.knex('demo')
    if (filters.text) sql.where('text', 'like', `%${filters.text}%`)
    if (pagination) {
      console.log('----->', pagination)
    }
    const data = await sql
    return data as Demo[] | []
  }
}