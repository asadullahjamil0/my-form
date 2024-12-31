import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
  data: any;
  std: any = new Student("junaid", 34, "junaid@483gamil.com")
  save(formData: any) {
    // console.log(formData.value);
    // this.data = formData;
    // const std = new Student(formData.name, formData.age, formData.email);
    // console.log(std);
    console.log(this.std);
  }

}
