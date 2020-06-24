import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Product } from "../product";
import { ProductsStoreService } from "../products-store.service";
import { MessagesService } from "../../messages/messages.service";

@Component({
  selector: "add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"],
  // providers: [MessagesService],
})
export class AddProductComponent implements OnInit {
  constructor(private productsStore: ProductsStoreService) {}

  ngOnInit(): void {}

  onSubmit(product: Product) {
    console.log(product);
    this.productsStore.createProduct(product).pipe().subscribe();
  }
}
