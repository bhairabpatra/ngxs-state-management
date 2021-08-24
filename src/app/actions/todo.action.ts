import { Todo } from '../models/Todo';
export class AddTodo {
  static readonly type = '[Todo] Add';
  subscribe: any;

  constructor(public payload: Todo) {
  }
}
