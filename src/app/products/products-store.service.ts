import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "./product";
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductsStoreService {
  private subject = new BehaviorSubject<Product[]>([]);
  products$: Observable<Product[]> = this.subject.asObservable();
  constructor(private http: HttpClient) {
    console.log("inside ProductsStoreService");
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.http
      .get<Product[]>("/api/products")
      .pipe(
        map((res) => res["payload"]),
        tap((res) => this.subject.next(res))
      )
      .subscribe();
  }
}
