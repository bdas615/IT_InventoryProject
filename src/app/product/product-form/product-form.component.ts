import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  submitUser(){
    console.log(this.userLogin.setValue)
    this.htt.post<any>("http://localhost:3000/product",this.userLogin.value).subscribe(res=>{ 
      alert("registation Successfull")
      window.location.reload();
    }) 
        
   }
   constructor(private htt:HttpClient,private activ:ActivatedRoute,
    private builder:FormBuilder){}
  ngOnInit(): void {
  }

}
