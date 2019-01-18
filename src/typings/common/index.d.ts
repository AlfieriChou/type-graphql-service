import { Config } from '../config'
import * as Knex from 'knex'

export class EntityService {
  public config: Config
  public knex: Knex
}
