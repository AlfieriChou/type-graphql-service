import { PaginationInput } from '../model/pagination'
import { DemoInput, Demo } from '../model/demo'
import { BaseService } from '../common/base_service'

export class DemoService extends BaseService {
  async index(
    filters: DemoInput = new DemoInput(),
    pagination: PaginationInput = new PaginationInput()
  ): Promise<Demo[] | [] | undefined> {
    const sql = this.knex('demo').whereNull('deleted_at')
    if (filters.text) sql.where('text', 'like', `%${filters.text}%`)
    if (pagination) {
      console.log('----->', pagination)
    }
    const data = await sql
    return data
  }
  async show(id: number): Promise<Demo> {
    const demo: Demo = await this.knex('demo')
      .whereNull('deleted_at')
      .where('id', id)
      .first()
    if (!demo) throw new Error('该信息不存在')
    return demo
  }
}
