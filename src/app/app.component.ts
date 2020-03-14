import { Component } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Curso de Angular';
  items = ['casa', 'pelota', 'colegio', 'silla'];
  listproduct: Product[] = [
    {
      id: '1',
      image: 'https://picsum.photos/300/200?image=244',
      title: 'Vida Marina',
      price: 8000,
      description: 'gdcgdgcdgcg'
    },
    {
      id: '2',
      image: 'https://picsum.photos/300/200?image=104',
      title: 'Vive como quieras',
      price: 8000,
      description: 'gdcgdgcdgcg'
    },

    {
      id: '3',
      image: 'https://picsum.photos/300/200?image=1024',
      title: 'Vida aérea',
      price: 8000,
      description: 'gdcgdgcdgcg'
    },
    {
      id: '4',
      image: 'https://picsum.photos/300/200?image=650',
      title: 'El camino',
      price: 8000,
      description: 'gdcgdgcdgcg'
    },
    {
      id: '5',
      image: 'https://picsum.photos/300/200?image=611',
      title: 'El Mar',
      price: 8000,
      description: 'gdcgdgcdgcg'
    }
  ];

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

  addItem() {
    this.items.push('nuevo item')
  };

  deleteItem(index: number) {
    this.items.splice(index, 1);
  };

  clickProduct(id: number) {
    console.log('product');
    console.log(id);

  }
}
