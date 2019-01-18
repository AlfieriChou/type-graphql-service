import { config } from '../config'
import { Config } from '../typings/config'
import knex from '../database'
import * as Knex from 'knex'
import { EntityService } from '../typings/common'

export class BaseService implements EntityService {
  config: Config
  knex: Knex
  constructor() {
    this.config = config
    this.knex = knex
  }
}
