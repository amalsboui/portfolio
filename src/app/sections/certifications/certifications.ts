import { Component } from '@angular/core';

interface Certification {
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  logo?: string; 
}

@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {
  certifications: Certification[] = [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      credentialUrl: 'https://www.credly.com/badges/9dceab74-24c2-4f3c-8d5a-c7cc2fdbc327/public_url', 
      logo: 'mdi:aws'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      credentialUrl: 'https://www.credly.com/badges/2a48fc72-8dff-4083-9394-ee97bb974828/public_url', 
      logo: 'mdi:aws'
    },
  ];

}
