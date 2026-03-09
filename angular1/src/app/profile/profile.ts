import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  name = "";
  count = 0;
  email = "";
  dateOfBirth = "";
  save() {
    console.log(this.name, this.dateOfBirth, this.email);
  }
  reset() {
    this.name = "";
    this.dateOfBirth = "";
    this.email = "";
  }
}
