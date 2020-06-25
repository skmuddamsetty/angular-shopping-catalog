import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";
import { Product } from "../product";

@Component({
  selector: "product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"],
})
export class ProductFormComponent implements OnInit {
  productForm = this.fb.group({
    title: ["", Validators.required],
    price: ["", Validators.required],
    description: ["", Validators.required],
    expressShipping: [false],
    onSale: [false],
    imageURL: [],
  });

  @Output() submitEvent = new EventEmitter<Product>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitEvent.emit(this.productForm.value);
  }

  onReset() {
    this.productForm.reset();
    this.productForm.markAsPristine();
  }
}
