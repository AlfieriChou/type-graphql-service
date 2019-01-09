import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchema } from 'type-graphql'
import { HelloResolver } from './resolvers/hello'
import * as path from 'path'

const main = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema/schema.gql')
  })

  const apolloServer = new ApolloServer({ schema })

  const app = Express()

  apolloServer.applyMiddleware({ app })

  app.listen(4000, () => {
    console.log('server started on http://localhost:4000/graphql')
  })
}

main()
