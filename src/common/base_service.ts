import { config } from '../config'
import { Config, Mysql } from '../typing/config'
import * as knex from 'knex'
import { KnexConfig } from '../typing/common'

const mysql: Mysql = config.mysql
const knexConfig: KnexConfig = {
  client: 'mysql',
  connection: {
    host: mysql.host,
    user: mysql.username,
    password: mysql.password,
    database: mysql.database,
    supportBigNumbers: true,
    charset: 'utf8mb4',
    connectTimeout: 15000
  },
  pool: {
    min: 2,
    max: 10
  }
}

export class BaseService {
  config: Config
  knex: any
  constructor() {
    this.config = config
    this.knex = knex(knexConfig)
  }
}
