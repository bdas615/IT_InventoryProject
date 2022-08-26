import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any>{

  constructor(private ser:ServiceService) { }
  resolve()
  {
     return this.ser.serFun();
   
  }
}