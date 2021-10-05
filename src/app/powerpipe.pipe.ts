import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerpipe',
})
export class PowerPipe implements PipeTransform {
  transform(value: any, power: number): number {
    return Math.pow(2, power);
  }
}
