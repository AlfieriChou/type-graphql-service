import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchema } from 'type-graphql'
import * as path from 'path'
import * as dir from 'dir_filenames'
import { config } from './config'

const resolvers: Function[] = []
const files: string[] = dir(path.resolve(__dirname, 'resolvers'))
files.map(file => {
  const funcs: Object = require(file)
  for (let i in funcs) {
    resolvers.push(funcs[i])
  }
})

const main = async () => {
  const schema = await buildSchema({
    resolvers: resolvers,
    emitSchemaFile: path.resolve(__dirname, 'schema/schema.gql')
  })

  const apolloServer = new ApolloServer({
    schema,
    tracing: false,
    formatError: err => {
      return {
        message: err.message,
        extensions: err.extensions
      }
    }
  })

  const app = Express()

  apolloServer.applyMiddleware({ app })

  app.listen(config.port, () => {
    console.log(`server started on http://localhost:${config.port}/graphql`)
  })
}

main()
