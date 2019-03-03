import { Controller, Get, BodyParams, Post, Required } from '@tsed/common';
import * as Express from 'express';
import { Book } from '../models/Book';

@Controller('/book')
export class BookController {
  @Get('/:id')
  async get(request: Express.Request, response: Express.Response) {
    return { id: request.params.id, name: "test" };
  }

  @Post('/')
  async post(@Required() @BodyParams() book: Book) {
    return { id: 'foo' };
  }
}
