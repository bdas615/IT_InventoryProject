import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  editDataValues!:FormGroup;
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

      }
      editFun(a:any){
        console.log(a)
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
        CellNumber:a.CellNumber
    
        })
      }
      updateData(id: any){
       
        this.htt.put<any>(`${"http://localhost:3000/product"}/${id}`,this.editDataValues.value).subscribe(res=>{ 
          alert("Updated SuccessfullY")
          // window.location.reload();
        })
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
  x:any;
  z:any;
  ngOnInit(): void {
     this.x=this.activ.snapshot.paramMap.get(('dat'));
    
 this.z=this.activ.snapshot.data['datav'];
  for(let m of this.z)
  {
    if(m.id==this.x)
    {
      this.editFun(m);
      break;
    }
  }
  }
  

}

