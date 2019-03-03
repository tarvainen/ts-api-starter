import { Service } from '@tsed/di'
import { Book } from '../models/Book'

// Dummy storage
const collection = []

@Service()
export class BookService {
  public get (id: number): Book {
    return collection.find(p => p.id === id)
  }

  public set (book: Book): Book {
    book.id = collection.length + 1

    collection.push(book)

    return book
  }
}
