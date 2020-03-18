import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/service/products.service';

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
