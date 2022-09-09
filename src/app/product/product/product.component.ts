
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
  userLogin=new FormGroup({
   

  devType:new FormControl('',[Validators.required]),
  DevTypeOther:new FormControl('',[Validators.required]),
  serial:new FormControl('',[Validators.required]),
  owner:new FormControl('',[Validators.required]),
  make:new FormControl('',[Validators.required]),
  model:new FormControl('',[Validators.required]),
  location:new FormControl('',[Validators.required]),
  purchase_date:new FormControl('',[Validators.required]),
  warrantyExpDate:new FormControl('',[Validators.required]),
  size:new FormControl('',[Validators.required]),
  toner:new FormControl('',[Validators.required]),
  value:new FormControl('',[Validators.required]),
  MacAddress:new FormControl('',[Validators.required]),
  IPAddress:new FormControl('',[Validators.required]),
  CellNumber:new FormControl('',[Validators.required])
     
   })

get devTypefunction(){
  return this.userLogin.get("devType")
}
get DevTypeOtherfunction(){
  return this.userLogin.get("DevTypeOther")
}
get serialfunction(){
  return this.userLogin.get("serial")
}
get ownerfunction(){
  return this.userLogin.get("owner")
}
get makefunction(){
  return this.userLogin.get("make")
}
get modelfunction(){
  return this.userLogin.get("model")
}
get locationfunction(){
  return this.userLogin.get("location")
}
get purchase_datefunction(){
  return this.userLogin.get("purchase_date")
}
get warrantyExpDatefunction(){
  return this.userLogin.get("warrantyExpDate")
}
get sizefunction(){
  return this.userLogin.get("size")
}
get tonerfunction(){
  return this.userLogin.get("toner")
}
get valuefunction(){
  return this.userLogin.get("value")
}
get MacAddressfunction(){
  return this.userLogin.get("MacAddress")
}
get IPAddressfunction(){
  return this.userLogin.get("IPAddress")
}
get CellNumberfunction(){
  return this.userLogin.get("CellNumber")
}
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
      devType:a.devType,
  DevTypeOther:a.DevTypeOther,
  serial:a.serial,
  owner:a.owner,
  make:a.make,
  model:a.model,
  location:a.location,
  purchase_date:a.purchase_date,
  warrantyExpDate:a.warrantyExpDate,
  size:a.size,
  toner:a.toner,
  value:a.value,
  MacAddress:a.MacAddress,
  IPAddress:a.IPAddress,
  CellNumber:a.CellNumber,
    })

     console.log(this.editDataValues)
     
  }
  updateData(id: any){
    console.log(this.editDataValues)
    this.htt.put<any>(`${"http://localhost:3000/product"}/${id}`,this.editDataValues.value).subscribe(res=>{ 
      alert("Updated Successfull")
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
      this.editDataValues=this.builder.group({
        devType:new FormControl('',[Validators.required]),
        DevTypeOther:new FormControl('',[Validators.required]),
        serial:new FormControl('',[Validators.required]),
        owner:new FormControl('',[Validators.required]),
        make:new FormControl('',[Validators.required]),
        model:new FormControl('',[Validators.required]),
        location:new FormControl('',[Validators.required]),
        purchase_date:new FormControl('',[Validators.required]),
        warrantyExpDate:new FormControl('',[Validators.required]),
        size:new FormControl('',[Validators.required]),
        toner:new FormControl('',[Validators.required]),
        value:new FormControl('',[Validators.required]),
        MacAddress:new FormControl('',[Validators.required]),
        IPAddress:new FormControl('',[Validators.required]),
        CellNumber:new FormControl('',[Validators.required])
       })
       
    // Create 100 users
    this.dataSource = new MatTableDataSource();

    // Assign the data to the data source for the table to render
    
  }
  get devTypefun(){
    return this.editDataValues.get("devType")
  }
  get DevTypeOtherfun(){
    return this.editDataValues.get("DevTypeOther")
  }
  get serialfun(){
    return this.editDataValues.get("serial")
  }
  get ownerfun(){
    return this.editDataValues.get("owner")
  }
  get makefun(){
    return this.editDataValues.get("make")
  }
  get modelfun(){
    return this.editDataValues.get("model")
  }
  get locationfun(){
    return this.editDataValues.get("location")
  }
  get purchase_datefun(){
    return this.editDataValues.get("purchase_date")
  }
  get warrantyExpDatefun(){
    return this.editDataValues.get("warrantyExpDate")
  }
  get sizefun(){
    return this.editDataValues.get("size")
  }
  get tonerfun(){
    return this.editDataValues.get("toner")
  }
  get valuefun(){
    return this.editDataValues.get("value")
  }
  get MacAddressfun(){
    return this.editDataValues.get("MacAddress")
  }
  get IPAddressfun(){
    return this.editDataValues.get("IPAddress")
  }
  get CellNumberfun(){
    return this.editDataValues.get("CellNumber")
  }
  ngOnInit(): void {
  
   this.condition= this.activ.snapshot.data['data']
  for(let x of this.condition)
  {
    console.log(x.owner)
  }
   this.dataSource.data=this.condition;
   console.log(this.dataSource.data);
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




