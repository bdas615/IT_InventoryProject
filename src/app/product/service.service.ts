import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
interface xx {
  data: string;
  msg: string;
  total: string;
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient,private rout:Router) {
  }
  con=true;
 
  serFun(){
   return this.http.post<any>("https://tools.brandinstitute.com/wsInventory/wsInventory.asmx/Device_GetAll",{token:"A12F7A58-842D-4111-A44D-5F8C4E1AA521"}).pipe(catchError((err:any)=>{
    this.rout.navigate(['/error']);
    return err
  }),map((res:xx)=>{
    return res.data;
   }))
 }



}