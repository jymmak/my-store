import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { ProductsService } from '../../../core/service/products.service'
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute, private productService: ProductsService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id)
    });
  }

  fetchProduct(id: string) {
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }


  crearProduct() {

    const newProduct: Product = {
      id: '222',
      title: 'nuevo producto',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg',
      price: 3000,
      description: 'nuevo producto'
    }
    this.productService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }
}
