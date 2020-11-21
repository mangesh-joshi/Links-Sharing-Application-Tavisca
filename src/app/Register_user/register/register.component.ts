import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterUser } from '../../models/register';
import * as RegisterActions from '../store/register-actions';
import { register } from '../store/register-actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  user: RegisterUser = new RegisterUser();
  registerResponse: any;
  error: string;

  constructor(private store: Store, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Build Register Form
    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f(): any { return this.form.controls; }

  // Register user actions
  onSubmit(): void {
    this.submitted = true;
    // Register user payload
    const payload = {
      firstname: this.f.firstname.value,
      lastname: this.f.lastname.value,
      email: this.f.email.value,
      password: this.f.password.value
    };

    if (this.form.valid) {
      this.store.dispatch(RegisterActions.register({ user: payload})); // Dispatch register action
      this.store.select(register).subscribe( response => {
      this.registerResponse = response;
      if (this.registerResponse.register.token) {
        this.navigate(); // call navigate after successful registeration
      } else {
        if (this.registerResponse.register.message) {
          this.error = this.registerResponse.register.message.error; // catch error
          console.log(this.error);
        }
      }
    });
   }
  }

  // Navigate to login page function
  navigate(): void {
    window.location.href = '/login'; // redirect to login page
  }

}
