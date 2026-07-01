import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { Translation } from '../../services/translation/translation';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  t = inject(Translation);


}
