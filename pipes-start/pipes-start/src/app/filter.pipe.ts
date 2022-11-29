import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string) {
    if (value.length === 0 || filterString == '') {
      return value;
    }

    const returnArray = [];
    for (let item of value) {
      if (item[propName] === filterString) {
        returnArray.push(item);
      }
    }
    return returnArray;
  }
}
