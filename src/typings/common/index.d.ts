import { Config } from '../config'
import * as Knex from 'knex'
import simple from 'graphql-query-complexity/dist/estimators/simple';

export interface Paginate{
  page: number
  size: number
  row_count: number
  page_count: number
}

export class EntityService {
  public config: Config
  public knex: Knex
  public paginate(count: number, page: number, size: number): Paginate
}
