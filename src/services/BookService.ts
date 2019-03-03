import { Service } from '@tsed/di'
import { Book } from '../entity/Book'
import { TypeORMService } from '@tsed/typeorm'
import { BaseRepository } from '../repositories/BaseRepository'

@Service()
export class BookService extends BaseRepository<Book> {
  constructor (orm: TypeORMService) {
    super(orm)
  }

  get className (): any {
    return Book
  }
}
