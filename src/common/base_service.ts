import { config } from '../config'
import { Config } from '../typings/config'
import knex from '../database'
import * as Knex from 'knex'

export class BaseService {
  config: Config
  knex: Knex
  constructor() {
    this.config = config
    this.knex = knex
  }
}
