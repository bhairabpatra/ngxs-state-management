import { User } from '../models/User';

export class AddUser {
    static readonly type = '[User] Add';
    constructor(public payload: User) {}
}

export class GetUser {
  static readonly type = '[User] Get';
}
