import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsListComponent } from "./product-list/products-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductsCenterComponent } from "./products-center/products-center.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";

const routes: Routes = [
  {
    path: "products",
    component: ProductsCenterComponent,
    children: [
      {
        path: "",
        component: ProductsListComponent,
      },
      {
        path: "create",
        component: AddProductComponent,
      },
      {
        path: "edit",
        component: EditProductComponent,
      },
      {
        path: ":id",
        component: ProductDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
