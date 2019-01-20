import { Config } from '../config'
import * as Knex from 'knex'

export interface Paginate {
  page: number
  size: number
  row_count: number
  page_count: number
}

export class EntityService {
  public config: Config
  public knex: Knex
  public paginate(count: number, page: number, size: number): Paginate
  public error(code: number, message: string): void
}
