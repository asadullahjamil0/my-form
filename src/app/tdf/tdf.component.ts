import { Component } from '@angular/core';
import { Student } from '../student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
  data: any;
  std: any = new Student();
  constructor() {
    this.std.country = "";
  }
  save(formData: any) {
    // console.log(formData.value);
    // this.data = formData;
    // const std = new Student(formData.name, formData.age, formData.email);
    // console.log(std);
    console.log(this.std);
    console.log(this.selectedHobbies)
  }

  selectedHobbies: string[] = [];
  onChange(e: any) {
    let selectedvalue = e.target.value;
    let checked = e.target.checked;
    // console.log(e.target.value, e.target.checked);
    if (checked) {
      this.selectedHobbies.push(selectedvalue);
    }
    else {
      let index = this.selectedHobbies.indexOf(e.target.value);
      this.selectedHobbies.splice(index, 1);
    }
  }

  resetForm(removeData: NgForm) {
    removeData.resetForm();
  }

}
