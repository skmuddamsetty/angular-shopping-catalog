import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Product } from "../product";

@Component({
  selector: "add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"],
})
export class AddProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(product: Product) {
    console.log(product);
  }
}
