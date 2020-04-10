import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '@core/services/product/products.service';
import { Product } from '@core/models/product.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;
  constructor(private route: ActivatedRoute, private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.product$ = this.route.params
      .pipe(
        switchMap((params: Params) => this.productsService.getProduct(params.id))
      );
  }

  crearProduct() {

    const newProduct: Product = {
      id: '239',
      title: 'nuevo producto',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg',
      price: 214000,
      description: 'nuevo producto'
    };
    this.productsService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 19000,
      description: 'edicion titulo'
    };
    this.productsService.updateProduct('5', updateProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productsService.deleteProduct('232').subscribe(rta => {
      console.log('producto borrado');
    });
  }

  getRandomUsers() {
    this.productsService.getRandomUsers()
      .subscribe(
        users => {
          console.log(users);
        },
        error => {
          console.error(error);
        }
      );
  }
}
