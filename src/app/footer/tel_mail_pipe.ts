import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'telMail'})
export class TelMailPipe implements PipeTransform {
  transform(value: string): string {
    return value.slice(value.indexOf(":") + 1);
  }
}