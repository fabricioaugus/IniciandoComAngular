import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.css']
})
export class ProductsReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }
  
  deleteProduct(id:number) {

    if(confirm("voce confirma o que voce esta deletando ?")){
      this.productService.delete(id).subscribe(() =>
        this.ngOnInit()
      )}
}
}


