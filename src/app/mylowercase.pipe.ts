import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mylowercasepipe'
})
export class MylowercasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase();
  }

}
