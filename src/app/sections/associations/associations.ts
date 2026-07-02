import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate-pipe';

interface Association {
  nameKey: string;
  roleKey: string;
  periodKey: string;
  descriptionKey: string;
  highlights: string[];
}

@Component({
  selector: 'app-associations',
  imports: [TranslatePipe],
  templateUrl: './associations.html',
  styleUrl: './associations.css',
})
export class Associations {
   associations: Association[] = [
    {
      nameKey: 'associations.jeinsat.name',
      roleKey: 'associations.jeinsat.role',
      periodKey: 'associations.jeinsat.period',
      descriptionKey: 'associations.jeinsat.description',
      highlights: [
        'associations.jeinsat.highlight1',
        'associations.jeinsat.highlight2',
        'associations.jeinsat.highlight3',
        'associations.jeinsat.highlight4',
        'associations.jeinsat.highlight5'
      ]
    },
    {
      nameKey: 'associations.acm.name',
      roleKey: 'associations.acm.role',
      periodKey: 'associations.acm.period',
      descriptionKey: 'associations.acm.description',
      highlights: [
        'associations.acm.highlight1',
        'associations.acm.highlight2'
      ]
    },
    {
      nameKey: 'associations.securinets.name',
      roleKey: 'associations.securinets.role',
      periodKey: 'associations.securinets.period',
      descriptionKey: 'associations.securinets.description',
      highlights: [
        'associations.securinets.highlight1',
        'associations.securinets.highlight2',
        'associations.securinets.highlight3'
      ]
    }
  ];
}

