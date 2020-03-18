import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from '../../../core/services/product/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }
  clickProduct(id: number) {
    console.log('product');
    console.log(`producto ${id}`);
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => {
     this.products = products;
    })
  }
}
