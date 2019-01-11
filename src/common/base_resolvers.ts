import * as dir from 'dir_filenames'
import * as path from 'path'

const services: string[] = dir(path.resolve(__dirname, '../service'))

export class BaseResolver {
  service: any
  constructor() {
    this.service = this._getService()
  }
  _getService () {
    let service: Object
    service = {}
    services.map(file => {
      const items: Object = require(file)
      for (let item in items) {
        const name: string = item.replace(/\Service/, '').toLocaleLowerCase()
        service[name] = require(file)[item].prototype
      }
    })
    return service
  }
}
