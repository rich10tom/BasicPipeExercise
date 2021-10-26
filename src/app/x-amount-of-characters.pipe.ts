import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xAmountOfCharacters'
})
export class XAmountOfCharactersPipe implements PipeTransform {

  transform(value: string, charLength: number): string {
    if (value.length > charLength){
      return value.substring(0,charLength) + " ...";
    }
    return value;
  }

}
