import { Component, inject } from '@angular/core';
import { Translation } from '../../services/translation';
import { TranslatePipe } from '../../pipes/translate-pipe';

interface Certification {
  nameKey: string;
  issuerKey: string;
  date?: string;
  credentialUrl?: string;
  logo?: string; 
}

@Component({
  selector: 'app-certifications',
  imports: [TranslatePipe],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {
  t = inject(Translation);

  certifications: Certification[] = [
    {
      nameKey: 'certification.associate.name',
      issuerKey: 'certification.associate.issuer',
      credentialUrl: 'https://www.credly.com/badges/9dceab74-24c2-4f3c-8d5a-c7cc2fdbc327/public_url', 
      logo: 'mdi:aws'
    },
    {
      nameKey: 'certification.practitioner.name',
      issuerKey: 'certification.practitioner.issuer',
      credentialUrl: 'https://www.credly.com/badges/2a48fc72-8dff-4083-9394-ee97bb974828/public_url', 
      logo: 'mdi:aws'
    },
  ];

}