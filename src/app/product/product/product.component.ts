
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
  productName: string;
  OwnerName: string;
  productLocationName: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit{
  userLogin=new FormGroup({
    productName:new FormControl('',[Validators.required]),
     OwnerName:new FormControl('',[Validators.required]),
    productLocationName:new FormControl('',[Validators.required])
     
   })
   editDataValues!:FormGroup;
 
   editData!:UserData;
   a:any;
   b:any;
   c:any;
   i!:number
   submitUser(){
    console.log(this.userLogin.setValue)
    this.htt.post<any>("http://localhost:3000/product",this.userLogin.value).subscribe(res=>{ 
      alert("registation Successfull")
      window.location.reload();
    }) 
        
   }
   deleteUser(id:any){
    alert("you want to delete data");
    this.htt.delete(`${"http://localhost:3000/product"}/${id}`).subscribe(res=>{ 
      alert("data deleted")
      window.location.reload();
     
    }) 
  
   }
   editFun(a:any){
    this.editDataValues.setValue({
      productName:a.productName,
     OwnerName:a.OwnerName,
    productLocationName:a.productLocationName
    })

     console.log(this.editData)
     
  }
  updateData(id: any){
    console.log(this.editDataValues)
    this.htt.put<any>(`${"http://localhost:3000/product"}/${id}`,this.editDataValues.value).subscribe(res=>{ 
      alert("Updated Successfull")
      window.location.reload();
    })
      
    

  }
  displayedColumns: string[] = [ 'productName', 'OwnerName', 'productLocationName','Edit'];
  dataSource: MatTableDataSource<UserData>;
  condition:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private htt:HttpClient,private activ:ActivatedRoute,
    private builder:FormBuilder) {
      this.editDataValues=this.builder.group({
        productName:new FormControl('',[Validators.required]),
         OwnerName:new FormControl('',[Validators.required]),
        productLocationName:new FormControl('',[Validators.required])
         
       })
    // Create 100 users
    this.dataSource = new MatTableDataSource();

    // Assign the data to the data source for the table to render
    
  }
  ngOnInit(): void {
  
   this.condition= this.activ.snapshot.data['data']
   this.dataSource.data=this.condition;
  //  .subscribe((a:any)=>{
  //   this.condition=a;
  //   for(let x of this.condition){
  //   console.log(x)
  //   }
  //   this.dataSource.data=a;
  //   console.log(this.dataSource.data)
  //  })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.editDataValues.value)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}




