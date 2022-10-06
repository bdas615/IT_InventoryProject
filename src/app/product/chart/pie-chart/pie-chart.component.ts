import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor(private activ:ActivatedRoute) { }
  condition:any;
  ngOnInit(): void {
    this.condition= this.activ.snapshot.data['datapie']
    this.condition=JSON.parse(this.condition)
    console.log(this.condition)
  
  }

}
