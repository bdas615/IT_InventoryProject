
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ServiceService } from '../service.service';
import { catchError, delay, from, map, timeInterval } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Expansion } from '@angular/compiler';

export interface UserData {
  DevId:string
  DevType:string,
  Owner:string,
  Location:string,
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit{
  
   editData!:UserData;
   a:any;
   b:any;
   c:any;
   i!:number
   dd=true;
   mm=false;
   ff:any;
   rr!:boolean;
   ss!:boolean;
   spin=true;
   y!:any;
   del(a:any){
    this.rr=true;
    this.ss=false;
    this.ff=a;
    console.log(this.ff)
   }
 
   deleteUser(id:any){
    // id=JSON.stringify(id)
    // console.log("delete")
    this.rr=!this.rr;
    this.ss=!this.ss;
    this.rr=!this.rr
    let x={

      "token":`A12F7A58-842D-4111-A44D-5F8C4E1AA521`,
      "DevId":id
}
console.log(x)
    setTimeout(()=>{
      this.htt.post<any>("https://tools.brandinstitute.com/wsInventory/wsInventory.asmx/Device_Del",x).pipe(catchError((err:any)=>{
        this.rout.navigate(['/error']);
        return err
      })).subscribe(res=>{ 
      console.log(res)
      this.dd=false;
    this.mm=true;
      }) 
    },5000)
   
  }
  alertfun(){
    window.location.reload();
  }
  displayedColumns: string[] = [ 'DevType', 'Owner', 'Location','Edit'];
  dataSource: MatTableDataSource<UserData>;
  condition:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private htt:HttpClient,private activ:ActivatedRoute,
    private builder:FormBuilder,private rout:Router) {
      
    // Create 100 users
    this.dataSource = new MatTableDataSource();

    // Assign the data to the data source for the table to render
    
  }
 
 
  ngOnInit(): void {
    this.spin=false;
    
  setTimeout(() => {
    this.condition= this.activ.snapshot.data['data']
    this.condition=JSON.parse(this.condition)
    console.log(this.condition)
    this.spin=true;
    this.dataSource.data=this.condition;
  },2000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}




