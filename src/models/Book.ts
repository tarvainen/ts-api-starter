import { Required, MinLength } from '@tsed/common';
import { Example } from '@tsed/swagger';

export class Book {
  @Example(12)
  id: number;

  @Required()
  @Example('My Book')
  title: string;
}
