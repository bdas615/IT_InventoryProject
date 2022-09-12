
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ServiceService } from '../service.service';
import { from, map } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
export interface UserData {
  id: number;
  devType:string,
  DevTypeOther:string,
  serial:string,
  owner:string,
  make:string,
  model:string,
  location:string,
  purchase_date:string,
  warrantyExpDate:string,
  size:string,
  toner:string,
  value:string,
  MacAddress:string,
  IPAddress:string,
  CellNumber:string
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
   
   deleteUser(id:any){
    alert("you want to delete data");
    this.htt.delete(`${"http://localhost:3000/product"}/${id}`).subscribe(res=>{ 
      alert("data deleted")
      window.location.reload();
     
    }) 
  }
  displayedColumns: string[] = [ 'devType', 'owner', 'location','Edit'];
  dataSource: MatTableDataSource<UserData>;
  condition:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private htt:HttpClient,private activ:ActivatedRoute,
    private builder:FormBuilder) {
      
    // Create 100 users
    this.dataSource = new MatTableDataSource();

    // Assign the data to the data source for the table to render
    
  }
 
 
  ngOnInit(): void {
  
   this.condition= this.activ.snapshot.data['data']
  
   this.dataSource.data=this.condition;
   
 
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




