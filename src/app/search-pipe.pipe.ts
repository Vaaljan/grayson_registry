import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(values: any[], filter: string): any {
    if (!values || !values.length) return [];
    if (!filter) return values;

    filter = filter.toUpperCase();

    if (filter && Array.isArray(values)) {
      const keys = Object.keys(values[0]);
      var kkkk = values.filter(v => v && keys.some(function (k) {
        if (v[k] == null)
          v[k] = '';
        if (k != "Image")
          return v[k].toString().toUpperCase().indexOf(filter) >= 0;
      }));
      return kkkk;
    }
  }

  
}
