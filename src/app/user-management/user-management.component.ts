import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent {
  form;
  constructor(private fb: FormBuilder, public auth: AuthService) {
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /*createUser() {
    console.log('Created User', this.form);
  }*/
}
