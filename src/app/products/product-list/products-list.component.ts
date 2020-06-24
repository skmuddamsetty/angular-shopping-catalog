import { Component, OnInit } from "@angular/core";
import { ProductsStoreService } from "../products-store.service";
import { Observable } from "rxjs";
import { Product } from "../product";

@Component({
  selector: "products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private productsStore: ProductsStoreService) {}

  ngOnInit(): void {
    this.products$ = this.productsStore.products$;
  }
}
