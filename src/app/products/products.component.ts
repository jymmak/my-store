import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  products: Product[] = [
    {
      id: '1',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg',
      title: 'Vestido Amarett',
      price: 8000,
      description: 'gdcgdgcdgcg'
    },
    {
      id: '2',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg',
      title: 'Vestido  Danuska',
      price: 8000,
      description: 'gdcgdgcdgcg'
    },
    {
      id: '3',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg',
      title: 'Casaca Brown',
      price: 8000,
      description: 'gdcgdgcdgcg'
    },
    {
      id: '4',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg',
      title: 'Casaca still',
      price: 8000,
      description: 'gdcgdgcdgcg'
    },
    {
      id: '5',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg',
      title: 'Vestido Breska',
      price: 8000,
      description: 'gdcgdgcdgcg'
    },

  ];
  clickProduct(id: number) {
    console.log('product');
    console.log(id);

  }
}
