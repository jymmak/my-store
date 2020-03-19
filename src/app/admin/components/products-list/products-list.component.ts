import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/core/services/product/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions']
  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
}
