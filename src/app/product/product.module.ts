import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { ResolverService } from './resolver.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PieChartComponent } from './chart/pie-chart/pie-chart.component';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductComponent,
    ProductFormComponent,
    ProductEditComponent,
    ErrorPageComponent,
    PieChartComponent,
    BarChartComponent,
    ProductDetailsComponent
  ],
  imports: [
    MatProgressBarModule,
    CommonModule,
    ProductRoutingModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers:[ResolverService],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
