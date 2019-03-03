import { Service } from '@tsed/di'
import { Book } from '../models/Book'

// Dummy storage
const collection: Array<Book> = []

@Service()
export class BookService {
  public get (id: number): Book | undefined {
    return collection.find((book: Book) => book.id === id)
  }

  public set (book: Book): Book {
    book.id = collection.length + 1

    collection.push(book)

    return book
  }
}
