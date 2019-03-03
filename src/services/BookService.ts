import { Service } from '@tsed/di'
import { Book } from '../entity/Book'
import { TypeORMService } from '@tsed/typeorm'
import { AfterRoutesInit } from '@tsed/common'
import { Connection } from 'typeorm'

@Service()
export class BookService implements AfterRoutesInit {
  private connection: Connection = {} as Connection

  constructor (private orm: TypeORMService) { }

  $afterRoutesInit () {
    this.connection = this.orm.get('default') as Connection
  }

  async get (id: number): Promise<Book | undefined> {
    return this.connection.manager.findOne<Book>(Book, id)
  }

  async find (): Promise<Book[]> {
    return this.connection.manager.find<Book>(Book)
  }

  async set (book: Book): Promise<Book> {
    await this.connection.manager.save(book)

    return book
  }
}
