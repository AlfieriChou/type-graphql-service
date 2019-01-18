import * as development from './default.config'
import * as release from './release.config'
import * as prod from './prod.config'
import * as _ from 'lodash'
import { Config, DefaultConfig } from '../typings/config'

const env: string = process.env.NODE_ENV || 'development'
const configs: Object = {
  development: development.config,
  release: release.config,
  production: prod.config
}

const defaultConfig: DefaultConfig = {
  env: env,
  appRoot: process.env.PWD
}

export let config: Config
config = _.merge(defaultConfig, configs[env])
