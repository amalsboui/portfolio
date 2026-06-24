import { Pipe, PipeTransform, inject } from '@angular/core';
import { Translation} from '../services/translation';
import { TranslationKey } from '../services/translations';

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