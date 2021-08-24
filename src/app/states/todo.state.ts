import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Todo} from '../models/Todo';
import {TodoService} from '../_service/todo.service';
import {tap} from 'rxjs/operators';
import {AddTodo} from '../actions/todo.action';
import { Injectable } from '@angular/core';


export class TodoStateModel {
  todos!: Todo[];

}
@State<TodoStateModel>({
  name: 'todos',
  defaults: {
      todos: []
  }
})


@Injectable()


export class TodoState {

  constructor(private todoService: TodoService) {
  }


  @Selector()
  static getUsers(state: TodoStateModel) {
      return state.todos;
  }


  @Action(AddTodo)
  addTodo({getState, patchState}: StateContext<TodoStateModel>, {payload}: AddTodo) {

      return this.todoService.addTodo(payload).pipe( tap((result) => {
        const state = getState();
        patchState({
            todos: [...state.todos, payload]
        });

      }))

  }




  // @Action(AddUser)
  // add({getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser) {
  //     const state = getState();
  //     patchState({
  //         users: [...state.users, payload]
  //     });
  // }

}
