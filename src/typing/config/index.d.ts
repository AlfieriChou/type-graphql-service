export interface Config {
  env?: string
  appRoot?: string
  port: number
  mysql: Mysql
}

interface Mysql {
  host: string
  port: number
  username: string
  password: string
  database: string
}

export interface DefaultConfig {
  env: string
  appRoot: string | undefined
}
