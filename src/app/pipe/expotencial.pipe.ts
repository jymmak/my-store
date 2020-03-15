import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expotencial'
})
export class ExpotencialPipe implements PipeTransform {

  transform(value: number): any {
    return Math.pow(value,4);
  }

}
