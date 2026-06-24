import { Component, inject } from '@angular/core';
import { Translation } from '../../services/translation';
import { TranslatePipe } from '../../pipes/translate-pipe';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  t = inject(Translation);


}
