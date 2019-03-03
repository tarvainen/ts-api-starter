import { Required, MinLength, Property } from '@tsed/common'
import { Example } from '@tsed/swagger'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Book {
  @Property()
  @PrimaryGeneratedColumn()
  @Example(12)
  id: number = 0

  @Required()
  @Column()
  @Example('My Book')
  title: string = ''
}
