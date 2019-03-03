import { Required, MinLength } from '@tsed/common'
import { Example } from '@tsed/swagger'

export class Book {
  @Example(12)
  id: number = 0

  @Required()
  @Example('My Book')
  title: string = ''
}
