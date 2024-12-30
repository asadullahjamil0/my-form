import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
  data: any;
  save(formData: any) {
    // console.log(formData.value);
    this.data = formData;
  }

}
