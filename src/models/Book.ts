import { Required } from '@tsed/common';

export class Book {
  id: number;

  @Required()
  title: string;
}
