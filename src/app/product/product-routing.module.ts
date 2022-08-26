import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

import { ResolverService } from './resolver.service';

const routes: Routes = [
  {path:'**',component:ProductComponent,resolve:{data:ResolverService}}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
