import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductsListComponent } from "./product-list/products-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductFormComponent } from "./product-form/product-form.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ProductsNavbarComponent } from "./products-navbar/products-navbar.component";
import { ProductsCenterComponent } from "./products-center/products-center.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
    ProductFormComponent,
    AddProductComponent,
    EditProductComponent,
    ProductsNavbarComponent,
    ProductsCenterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class ProductsModule {}
