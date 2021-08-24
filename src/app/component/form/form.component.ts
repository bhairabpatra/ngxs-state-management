import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AddTodo} from '../../actions/todo.action';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  angForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      id: ['', Validators.required ],
      title: ['', Validators.required ],
      name: ['', Validators.required ]
   });
  }

  get f() { return this.angForm.controls; }

  // addUser(name: any, email: any) {
  //   this.store.dispatch(new AddUser({ name, email}));
  // }
  onSubmit() {

    this.store.dispatch(
      new AddTodo({
      id: this.f.id.value,
      title: this.f.title.value,
      name: this.f.name.value

    })).subscribe(()=>{
      console.log("Haoooooooooooooooooooo")
  });



  }

  ngOnInit(): void {
  }

}
