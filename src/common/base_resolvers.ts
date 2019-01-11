import { config } from '../config'
import { Config } from '../typing/config'

export class BaseResolver {
  config: Config
  constructor() {
    this.config = config
  }
}
