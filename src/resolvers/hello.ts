import { Resolver, Query } from 'type-graphql'
import { Hello } from '../model/hello'

@Resolver()
export class HelloResolver {
  @Query(() => Hello)
  async hello() {
    return {
      result: 'Hello World!'
    }
  }
}
