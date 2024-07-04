import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDuration',
  standalone: true
})
export class TimeDurationPipe implements PipeTransform {
  
  transform(value: string): string {
    const minutes = Number(value) % 60;
    const hours = (Number(value) - minutes) / 60;
    return `${hours}h ${minutes}min`;
  }
}
