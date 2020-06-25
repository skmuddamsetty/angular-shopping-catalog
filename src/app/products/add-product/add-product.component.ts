import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { ProductsStoreService } from "../products-store.service";

@Component({
  selector: "add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"],
})
export class AddProductComponent implements OnInit {
  constructor(private productsStore: ProductsStoreService) {}

  ngOnInit(): void {}

  onSubmit(product: Product) {
    console.log(product);
    this.productsStore.createProduct(product).pipe().subscribe();
  }
}
