import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any>{

  constructor(private ser:ServiceService,private rout:Router) { }
  resolve()
  {
     return this.ser.serFun().pipe(catchError((err:any)=>{
      this.rout.navigate(['/error']);
      return err
    }))
   
  }
}