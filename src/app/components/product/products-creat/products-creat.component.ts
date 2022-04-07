import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-creat',
  templateUrl: './products-creat.component.html',
  styleUrls: ['./products-creat.component.css']
})
export class ProductsCreatComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
  }
  
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto Criado com Sucesso !!! ");
      this.router.navigate(['/products']);
    })
  }
  concel(): void {
    this.router.navigate(['/products']);

  }

}
