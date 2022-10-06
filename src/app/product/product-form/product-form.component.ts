import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ServiceService } from '../service.service';
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
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  userLogin=new FormGroup({
   
    token:new FormControl('A12F7A58-842D-4111-A44D-5F8C4E1AA521',[Validators.required]),
    DevType:new FormControl('',[Validators.required]),
    DevTypeOther:new FormControl('',[Validators.required]),
    Make:new FormControl('',[Validators.required]),
    Model:new FormControl('',[Validators.required]),
    Owner:new FormControl('',[Validators.required]),
    Location:new FormControl('',[Validators.required]),
    Serial:new FormControl('',[Validators.required]),
    PurchaseDate:new FormControl('',[Validators.required]),
    WarrantyExpDate:new FormControl('',[Validators.required]),
    ServiceExpDate:new FormControl('',[Validators.required]),
    Value:new FormControl('',[Validators.required]),
    Size:new FormControl('',[Validators.required]),
    Toner:new FormControl('',[Validators.required]),
    MacAddress:new FormControl('',[Validators.required]),
    IPAddress:new FormControl('',[Validators.required]),
    CellNumber:new FormControl('',[Validators.required])
       
     })
  
  get devTypefunction(){
     return this.userLogin.get("DevType")
  }
  get DevTypeOtherfunction(){
    return this.userLogin.get("DevTypeOther")
  }
  get serialfunction(){
    return this.userLogin.get("Serial")
  }
  get ownerfunction(){
    return this.userLogin.get("Owner")
  }
  get makefunction(){
    return this.userLogin.get("Make")
  }
  get modelfunction(){
    return this.userLogin.get("Model")
  }
  get locationfunction(){
    return this.userLogin.get("Location")
  }
  get purchase_datefunction(){
    return this.userLogin.get("PurchaseDate")
  }
  get warrantyExpDatefunction(){
    return this.userLogin.get("WarrantyExpDate")
  }
  get serviceExpDatefunction(){
    return this.userLogin.get("ServiceExpDate")
  }
  get sizefunction(){
    return this.userLogin.get("Size")
  }
  get tonerfunction(){
    return this.userLogin.get("Toner")
  }
  get valuefunction(){
    return this.userLogin.get("Value")
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
  get devTypefunction1(){
    let x= this.userLogin.get("DevType")
    x=x?.value
    let num = Number(x);
    console.log(num)
    let m=JSON.stringify(num);
     console.log(m);
     if("null"==m)
     {
      return true;
      console.log('my null')
     }
     else{
      return false;
     }
 }
 get DevTypeOtherfunction1(){
   let x= this.userLogin.get("DevTypeOther")
   x=x?.value
   let num = Number(x);
   console.log(num)
   let m=JSON.stringify(num);
    console.log(m);
    if("null"==m)
    {
     return true;
     console.log('my null')
    }
    else{
     return false;
    }
 }
 get serialfunction1(){
  let x=this.userLogin.get("Serial")
   x=x?.value
   let num = Number(x);
   console.log(num)
   let m=JSON.stringify(num);
    console.log(m);
    if("null"==m)
    {
     return true;
     console.log('my null')
    }
    else{
     return false;
    }
 }
 get ownerfunction1(){
  let x=this.userLogin.get("Owner")
   x=x?.value
   let num = Number(x);
   console.log(num)
   let m=JSON.stringify(num);
    console.log(m);
    if("null"==m)
    {
     return true;
     console.log('my null')
    }
    else{
     return false;
    }
 }
 get makefunction1(){
  let x=this.userLogin.get("Make")
   x=x?.value
   let num = Number(x);
   console.log(num)
   let m=JSON.stringify(num);
    console.log(m);
    if("null"==m)
    {
     return true;
     console.log('my null')
    }
    else{
     return false;
    }
 }
 get modelfunction1(){
  let x=this.userLogin.get("Model")
   x=x?.value
   let num = Number(x);
   console.log(num)
   let m=JSON.stringify(num);
    console.log(m);
    if("null"==m)
    {
     return true;
     console.log('my null')
    }
    else{
     return false;
    }
 }
 get locationfunction1(){
  let x=this.userLogin.get("Location")
   x=x?.value
   let num = Number(x);
   console.log(num)
   let m=JSON.stringify(num);
    console.log(m);
    if("null"==m)
    {
     return true;
     console.log('my null')
    }
    else{
     return false;
    }
 }
 get purchase_datefunction1(){
  let x=this.userLogin.get("PurchaseDate")
   x=x?.value
   let num = Number(x);
   console.log(num)
   let m=JSON.stringify(num);
    console.log(m);
    if("null"==m)
    {
     return true;
     console.log('my null')
    }
    else{
     return false;
    }
 }
 get warrantyExpDatefunction1(){
  let x=this.userLogin.get("WarrantyExpDate")
   x=x?.value
   let num = Number(x);
   console.log(num)
   let m=JSON.stringify(num);
    console.log(m);
    if("null"==m)
    {
     return true;
     console.log('my null')
    }
    else{
     return false;
    }
 }
 get serviceExpDatefunction1(){
  let x= this.userLogin.get("ServiceExpDate")
   x=x?.value
   let num = Number(x);
   console.log(num)
   let m=JSON.stringify(num);
    console.log(m);
    if("null"==m)
    {
     return true;
     console.log('my null')
    }
    else{
     return false;
    }
 }
 get sizefunction1(){
  let x= this.userLogin.get("Size")
   x=x?.value
   let num = Number(x);
   console.log(num)
   let m=JSON.stringify(num);
    console.log(m);
    if("null"==m)
    {
     return true;
     console.log('my null')
    }
    else{
     return false;
    }
 }
 get tonerfunction1(){
  let x= this.userLogin.get("Toner")
   x=x?.value
   let num = Number(x);
   console.log(num)
   let m=JSON.stringify(num);
    console.log(m);
    if("null"==m)
    {
     return true;
     console.log('my null')
    }
    else{
     return false;
    }
 }
 get valuefunction1(){
  let x= this.userLogin.get("Value")
   x=x?.value
   let num = Number(x);
   console.log(num)
   let m=JSON.stringify(num);
    console.log(m);
    if("null"==m)
    {
     return true;
     console.log('my null')
    }
    else{
     return false;
    }
 }
 get MacAddressfunction1(){
  let x= this.userLogin.get("MacAddress")
   x=x?.value
   let num = Number(x);
   console.log(num)
   let m=JSON.stringify(num);
    console.log(m);
    if("null"==m)
    {
     return true;
     console.log('my null')
    }
    else{
     return false;
    }
 }
 get IPAddressfunction1(){
  let x=this.userLogin.get("IPAddress")
   x=x?.value
   let num = Number(x);
   console.log(num)
   let m=JSON.stringify(num);
    console.log(m);
    if("null"==m)
    {
     return true;
     console.log('my null')
    }
    else{
     return false;
    }
 }
 get CellNumberfunction1(){
   let x=this.userLogin.get("CellNumber")
   x=x?.value
   let num = Number(x);
   console.log(num)
   let m=JSON.stringify(num);
    console.log(m);
    if("null"==m)
    {
     return true;
     console.log('my null')
    }
    else{
     return false;
    }
 }
dd=true;
mm=false;
  submitUser(){
    console.log(this.userLogin.value)
    setTimeout(()=>{
      this.htt.post<any>("https://tools.brandinstitute.com/wsInventory/wsInventory.asmx/Device_Add",this.userLogin.value).pipe(catchError((err:any)=>{
        this.rout.navigate(['/error']);
        return err
      })).subscribe(res=>{ 
      this.dd=false;
      this.mm=true;
      
      })
    },1000)
    
   
   }
   alertfun(){
    this.rout.navigate(['/']);
  }
   constructor(private htt:HttpClient,private activ:ActivatedRoute,
    private builder:FormBuilder,private rout:Router,private serv:ServiceService){}
  ngOnInit(): void {
  }

}
