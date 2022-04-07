import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urlBase = "http://localhost:3001/products";

  constructor(private snackBar:MatSnackBar, private httpClient: HttpClient) {

   }
   showMessage(msg: string): void{
     this.snackBar.open(msg, 'X',{
       duration:3000,
       horizontalPosition:"right",
       verticalPosition:"top"
     });

   }
   create(product:Product): Observable<Product>{
      return this.httpClient.post<Product>(this.urlBase, product);     

   }
   read():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.urlBase);
   }
   readById(id: string | null):Observable<Product>{
    const url =`${this.urlBase}/${id}`;
     return this.httpClient.get<Product>(url);

   }
   update(product:Product): Observable<Product> {
    const url =`${this.urlBase}/${product.id}`;
     return this.httpClient.put<Product>(url, product);
   }
   
   delete(id:string):Observable<Product>{
    const url =`${this.urlBase}/${id}`;
    return this.httpClient.delete<Product>(url);

  }
}
