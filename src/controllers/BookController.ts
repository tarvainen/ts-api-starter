import { Controller, Get, BodyParams, Post, Required, Delete } from '@tsed/common'
import * as Express from 'express'
import { Book } from '../entity/Book'
import { BookService } from '../services/BookService'

@Controller('/book')
export class BookController {
  constructor (private bookService: BookService) {}

  @Get('/:id')
  async get (request: Express.Request, response: Express.Response) {
    return this.bookService.get(+request.params.id)
  }

  @Get('/')
  async find (request: Express.Request, response: Express.Response) {
    return this.bookService.findPaged(+request.query.page || 1)
  }

  @Delete('/:id')
  async delete (request: Express.Request, response: Express.Response) {
    return this.bookService.delete(+request.params.id)
  }

  @Post('/')
  async post (@Required() @BodyParams() book: Book) {
    return this.bookService.set(book)
  }
}
