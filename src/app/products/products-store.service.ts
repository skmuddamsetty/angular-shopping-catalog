import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { Product } from "./product";
import { tap, map, catchError, shareReplay } from "rxjs/operators";
import { MessagesService } from "../messages/messages.service";

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

  createProduct(product: Product): Observable<any> {
    const products = this.subject.getValue();
    // optimistic save
    products.push(product);
    this.subject.next(products);
    return this.http.post("/api/productss", product).pipe(
      catchError((err) => {
        const msg = "Could not save the product. Please try again.";
        // this.messagesService.showErrors(msg);
        return throwError(err);
      }),
      shareReplay()
    );
  }
}
