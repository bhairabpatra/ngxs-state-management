import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AddUser } from '../../actions/user.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  angForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ]
   });
  }

  get f() { return this.angForm.controls; }

  // addUser(name: any, email: any) {
  //   this.store.dispatch(new AddUser({ name, email}));
  // }
  onSubmit() {

    this.store.dispatch(
      new AddUser({
      name: this.f.name.value,
      email: this.f.email.value

    }));



  }

  ngOnInit() {
  }

}
