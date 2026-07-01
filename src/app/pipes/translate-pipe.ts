import { Pipe, PipeTransform, inject } from '@angular/core';
import { Translation } from '../services/translation/translation';

@Pipe({
  name: 'translate',
  pure: false 
})

export class TranslatePipe implements PipeTransform {
  t = inject(Translation);

  transform(key: string): string {
    return this.t.translate(key as any);
  }
}