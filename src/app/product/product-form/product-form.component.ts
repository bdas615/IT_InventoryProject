import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
dd=true;
mm=false;
  submitUser(){
    console.log(this.userLogin.value)
    setTimeout(()=>{
      this.htt.post<any>("https://tools.brandinstitute.com/wsInventory/wsInventory.asmx/Device_Add",this.userLogin.value).subscribe(res=>{ 
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
