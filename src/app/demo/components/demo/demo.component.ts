import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  title = 'Curso de Angular';
  items = ['casa', 'pelota', 'colegio', 'silla'];
  power = 3;

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

  addItem() {
    this.items.push('nuevo item')
  };

  deleteItem(index: number) {
    this.items.splice(index, 1);
  };

}
