import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { ServiceService } from '../service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id:any;
  a:any;
  data:any;
  x:any;
  token:any;
  DevId!:number;
  devType!:string
  DevTypeOther!:string
  serial!:string
  owner!:string
  make!:string
  model!:string
  location!:string
  purchase_date!:string
  warrantyExpDate!:string
  size!:string
  toner!:string
  value!:string
  MacAddress!:string
  IPAddress!:string
  CellNumber!:string

  entryForm = new FormGroup({

    token: new FormControl("A12F7A58-842D-4111-A44D-5F8C4E1AA521"),
    DevId:new FormControl(''),
    DevType: new FormControl(''),
    DevTypeOther: new FormControl(''),
    Make: new FormControl(''),
    Model: new FormControl(''),
    Owner: new FormControl(''),
    Location: new FormControl(''),
    Serial: new FormControl(''),
    PurchaseDate: new FormControl(''),
    WarrantyExpDate: new FormControl(''),
    ServiceExpDate: new FormControl(''),
    Value: new FormControl(''),
    Size: new FormControl(''),
    Toner: new FormControl(''),
    MacAddress: new FormControl(''),
    IPAddress: new FormControl(''),
    CellNumber: new FormControl('')
  })

  constructor(private serv:ServiceService,
    private route:ActivatedRoute,
    private http:HttpClient) { }

  ngOnInit(): void {
    this.x = this.route.snapshot.paramMap.get(('id'));
    this.id =this.x
    this.callContentValue(this.x);
  }

  callContentValue(c:any)
  {
    
    let x = 
    {
      "token":'A12F7A58-842D-4111-A44D-5F8C4E1AA521',
      "DevId":c
    }

    return this.http.post<any>('https://tools.brandinstitute.com/wsInventory/wsInventory.asmx/Device_Get',x).pipe(tap((r:any)=>
    {
  
    }
    ),catchError((e:any)=>{
      e='Error Loading data!!Please try again....';
      return e;
    })
    )
    .subscribe((w:any)=>
    {
      this.a = w.data;
      this.data = JSON.parse(this.a)
    })
  }



  deleteUser(id:any)
  {
    let x={

      "token":`A12F7A58-842D-4111-A44D-5F8C4E1AA521`,
      "DevId":id
}
    
    this.http.post<any>("https://tools.brandinstitute.com/wsInventory/wsInventory.asmx/Device_Del",x).subscribe(res=>{ 
    // console.log(res)
    console.log('Delete Successful')
  }) 
  }

  name = 'ExcelSheet.xlsx';
  exportToExcel()
  {
    let element = document.getElementById('table1');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }
}
