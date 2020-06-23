import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { FormsModule } from "@angular/forms";
import { ProductsListComponent } from "./product-list/products-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductFormComponent } from "./product-form/product-form.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ProductsNavbarComponent } from "./products-navbar/products-navbar.component";
import { ProductsCenterComponent } from "./products-center/products-center.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatListModule } from "@angular/material/list";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";

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
  imports: [CommonModule, FormsModule, ProductsRoutingModule, MatToolbarModule],
})
export class ProductsModule {}
