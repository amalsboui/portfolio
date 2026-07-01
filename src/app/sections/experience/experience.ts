import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { Translation } from '../../services/translation/translation';

export interface ExperienceEntry {
  periodKey: string;
  roleKey: string;
  orgKey: string;
  pointKeys: string[];
}

@Component({
  selector: 'app-experience',
  imports: [TranslatePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  t = inject(Translation);
  timeline: ExperienceEntry[] = [
    {
      periodKey: 'experience.period1',
      roleKey: 'experience.role1',
      orgKey: 'experience.org1',
      pointKeys: [
        'experience.point1_1',
        'experience.point1_2',
        'experience.point1_3'
      ]
    },
    {
      periodKey: 'experience.period2',
      roleKey: 'experience.role2',
      orgKey: 'experience.org2',
      pointKeys: [
        'experience.point2_1',
        'experience.point2_2',
        'experience.point2_3'
      ]
    }
  ];
}
