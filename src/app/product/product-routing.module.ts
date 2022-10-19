import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component';
import { PieChartComponent } from './chart/pie-chart/pie-chart.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';

import { ResolverService } from './resolver.service';

const routes: Routes = [
  { path:'proD/:id',component:ProductDetailsComponent },
  {path:'barChart',component:BarChartComponent,resolve:{databar:ResolverService}},
  {path:'pieChart',component:PieChartComponent,resolve:{datapie:ResolverService}},
  {path:'error',component:ErrorPageComponent},
  {path:'productForm',component:ProductFormComponent},
  {path:'editFrom/:dat',component:ProductEditComponent,resolve:{datav:ResolverService}},
  {path:'**',component:ProductComponent,resolve:{data:ResolverService}},
  
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
