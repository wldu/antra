import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  name: FormControl;
  email: FormControl;
  dateOfBirth: FormControl;
  constructor() {
    this.name = new FormControl('');
    this.email = new FormControl('');
    this.dateOfBirth = new FormControl('');
  }
  save() {
    console.log(this.name.value, this.dateOfBirth.value, this.email.value);
  }
  reset() {
    this.name.reset();
    this.dateOfBirth.reset();
    this.email.reset();
  }
}
