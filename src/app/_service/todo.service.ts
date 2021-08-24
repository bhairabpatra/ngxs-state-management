import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  addTodo(payload: Todo) {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', payload);
}

}
