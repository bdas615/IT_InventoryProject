import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';

import { ResolverService } from './resolver.service';

const routes: Routes = [
  {path:'productForm',component:ProductFormComponent},
  {path:'editFrom/:dat',component:ProductEditComponent,resolve:{datav:ResolverService}},
  {path:'**',component:ProductComponent,resolve:{data:ResolverService}},
  
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
