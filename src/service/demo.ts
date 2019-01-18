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
      const countSql = sql.clone()
      const { count } = await countSql.count('* as count').first()
      sql.offset((pagination.page - 1) * pagination.size).limit(pagination.size)
      const result = await sql
      const paginate = this.paginate(count, pagination.page, pagination.size)
      console.log('----->', paginate)
      return result
    }
    const data = await sql
    return data
  }
  async show(id: number): Promise<Demo> {
    const demo: Demo = await this.knex('demo')
      .whereNull('deleted_at')
      .where('id', id)
      .first()
    if (!demo) this.error(404, '该信息不存在')
    return demo
  }
}
