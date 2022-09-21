import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../product/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
z:any
  constructor(private ser:ServiceService) {
    this.z=ser.con;
console.log(this.z)




   }

  ngOnInit(): void {
  }

}
