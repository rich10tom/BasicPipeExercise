import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPets'
})
export class FilterPetsPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if(value.length === 0){
      return value;
    }
    const filterResult: string[] = [];
    for(const item of value){
      if(item === filterString){
        filterResult.push(item);
      }
    }
    return filterResult;
  }

}
