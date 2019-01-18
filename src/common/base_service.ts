import { config } from '../config'
import { Config } from '../typings/config'
import knex from '../database'
import * as Knex from 'knex'
import { EntityService, Paginate } from '../typings/common'
import { ApiErrorException } from './exception'

export class BaseService implements EntityService {
  config: Config
  knex: Knex
  constructor() {
    this.config = config
    this.knex = knex
  }
  public paginate(count: number, page: number, size: number): Paginate {
    return {
      page: +page,
      size: +size,
      row_count: count,
      page_count: Math.ceil(count / size)
    }
  }
  public error(code: number, message: string): void {
    throw new ApiErrorException(message, code)
  }
}
