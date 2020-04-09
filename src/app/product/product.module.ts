import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ProductComponent } from './components/product/product.component';
import { ProductsContainer } from './containers/products/products.container';

@NgModule({
    declarations: [
        ProductComponent,
        ProductDetailComponent,
        ProductsContainer
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProductRoutingModule,
        MaterialModule
    ]
})
export class ProductModule { }
