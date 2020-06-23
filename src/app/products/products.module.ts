import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { FormsModule } from "@angular/forms";
import { ProductsListComponent } from "./product-list/products-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductFormComponent } from './product-form/product-form.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsNavbarComponent } from './products-navbar/products-navbar.component';

@NgModule({
  declarations: [ProductsListComponent, ProductDetailComponent, ProductFormComponent, AddProductComponent, EditProductComponent, ProductsNavbarComponent],
  imports: [CommonModule, FormsModule, ProductsRoutingModule],
})
export class ProductsModule {}
