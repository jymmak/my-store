import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private productsService: ProductsService) { }


  clickProduct(id: number) {
    console.log('product');
    console.log(`producto ${id}`);

  }
  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }

}
