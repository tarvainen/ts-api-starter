import { Controller, Get, BodyParams, Post, Required } from '@tsed/common'
import * as Express from 'express'
import { Book } from '../models/Book'
import { BookService } from '../services/BookService'

@Controller('/book')
export class BookController {
  private bookService: BookService

  constructor (bookService: BookService) {
    this.bookService = bookService
  }

  @Get('/:id')
  async get (request: Express.Request, response: Express.Response) {
    return this.bookService.get(+request.params.id)
  }

  @Post('/')
  async post (@Required() @BodyParams() book: Book) {
    return this.bookService.set(book)
  }
}
