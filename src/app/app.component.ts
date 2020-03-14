import { Component } from '@angular/core';
import {Product} from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Curso de Angular';
  items = ['casa', 'pelota', 'colegio', 'silla'];
  products: Product[] = [
    {
      id: '1',
      image: 'https://picsum.photos/300/200?image=244',
      curso: 'Vida Marina',
      price: 8000,
      description: 'gdcgdgcdgcg'
    },
    {
      id: '2',
      image: 'https://picsum.photos/300/200?image=104',
      curso: 'Vive como quieras',
      price: 8000,
      description: 'gdcgdgcdgcg'
    },

    {
      id: '3',
      image: 'https://picsum.photos/300/200?image=1024',
      curso: 'Vida aérea',
      price: 8000,
      description: 'gdcgdgcdgcg'
    },
    {
      id: '4',
      image: 'https://picsum.photos/300/200?image=650',
      curso: 'El camino',
      price: 8000,
      description: 'gdcgdgcdgcg'
    },
    {
      id: '5',
      image: 'https://picsum.photos/300/200?image=611',
      curso: 'El Mar',
      price: 8000,
      description: 'gdcgdgcdgcg'
    }
  ];


  addItem() {
    this.items.push('nuevo item')
  };

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
