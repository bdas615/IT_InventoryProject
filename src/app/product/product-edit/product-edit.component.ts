import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  editDataValues!:FormGroup;
  constructor(private htt:HttpClient,private activ:ActivatedRoute,
    private builder:FormBuilder,private rout:Router) {
      this.editDataValues=this.builder.group({
    token:new FormControl(''),
    DevId:new FormControl(''),
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

      }
      editFun(a:any){
        // console.log(a)
        this.editDataValues.setValue({
        token:"A12F7A58-842D-4111-A44D-5F8C4E1AA521",
        DevId:a.DevId,
        DevType:a.DevType,
        DevTypeOther:a.DevTypeOther,
        Make:a.Make,
        Model:a.Model,
        Serial:a.Serial,
        Owner:a.Owner,
        Location:a.Location,
        PurchaseDate:a.PurchaseDate,
        WarrantyExpDate:a.WarrantyExpDate,
        ServiceExpDate:a.ServiceExpDate,
        Value:a.Value,
        Size:a.Size,
        Toner:a.Toner,
        MacAddress:a.MacAddress,
        IPAddress:a.IPAddress,
        CellNumber:a.CellNumber
    
        })
      }
      dd=true;
      mm=false;
      updateData(id: any){
      //  console.log(this.editDataValues.value);
       let m=this.editDataValues.value;
      setTimeout(()=>{
       return this.htt.post<any>("https://tools.brandinstitute.com/wsInventory/wsInventory.asmx/Device_Upd",m)
       .subscribe(res=>{ 
          this.dd=false;
          this.mm=true; 
          console.log(res)
          // window.location.reload();
       })
      },1000)
      
      }
      alertfun(){
        this.rout.navigate(['/']);
      }
  get devTypefun(){
    return this.editDataValues.get("DevType")
  }
  get devTypeOtherfun(){
    return this.editDataValues.get("DevTypeOther")
  }
  get serviceExpDatefun(){
    return this.editDataValues.get("ServiceExpDate")
  }
  get serialfun(){
    return this.editDataValues.get("Serial")
  }
  get ownerfun(){
    return this.editDataValues.get("Owner")
  }
  get makefun(){
    return this.editDataValues.get("Make")
  }
  get modelfun(){
    return this.editDataValues.get("Model")
  }
  get locationfun(){
    return this.editDataValues.get("Location")
  }
  get purchaseDatefun(){
    return this.editDataValues.get("PurchaseDate")
  }
  get warrantyExpDatefun(){
    return this.editDataValues.get("WarrantyExpDate")
  }
  get sizefun(){
    return this.editDataValues.get("Size")
  }
  get tonerfun(){
    return this.editDataValues.get("Toner")
  }
  get valuefun(){
    return this.editDataValues.get("Value")
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
  x:any;
  z:any;
  ngOnInit(): void {
     this.x=this.activ.snapshot.paramMap.get(('dat'));
    
 this.z=this.activ.snapshot.data['datav'];
 this.z=JSON.parse(this.z)
 console.log(this.z)
  for(let m of this.z)
  {
    
    if(m.DevId==this.x)
    {
      
      this.editFun(m);
      break;
    }
  }
  }
  

}

