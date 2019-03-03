import { TypeORMService } from '@tsed/typeorm'
import { AfterRoutesInit } from '@tsed/common'
import { Connection } from 'typeorm'
import { PaginationResult } from '../model/PaginationResult'

export abstract class BaseRepository<T> implements AfterRoutesInit {
  protected connection: Connection = {} as Connection
  protected orm: TypeORMService = {} as TypeORMService

  abstract get className (): any

  constructor (orm: TypeORMService) {
    this.orm = orm
  }

  $afterRoutesInit () {
    this.connection = this.orm.get('default') as Connection
  }

  async get (id: number): Promise<T | undefined> {
    return this.connection.manager.findOne<T>(this.className, id)
  }

  async find (): Promise<[T[], number]> {
    return this.connection.manager.findAndCount<T>(this.className)
  }

  async findPaged (page: number = 1): Promise<PaginationResult<T>> {
    const itemsPerPage = 10

    const result = await this.connection.manager.findAndCount<T>(
      this.className,
      {
        skip: (page - 1) * itemsPerPage,
        take: itemsPerPage
      })

    return {
      items: result[0],
      total: result[1]
    } as PaginationResult<T>
  }

  async set (book: T): Promise<T> {
    await this.connection.manager.save(book)

    return book
  }
}
