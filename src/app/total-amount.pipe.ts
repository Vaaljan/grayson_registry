import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalAmount'
})
export class TotalAmountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let total = 0;
    if(typeof value == 'undefined'){
      return 0;
    }
    
    for(let item of value){
      total += parseInt(item[args]);
    }
    return total;
  }

}
