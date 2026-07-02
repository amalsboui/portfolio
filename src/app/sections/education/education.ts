import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate-pipe';

interface EducationEntry {
  periodKey: string;
  schoolKey: string;
  programKey: string;
}

@Component({
  selector: 'app-education',
  imports: [TranslatePipe],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  education: EducationEntry[] = [
    {
      periodKey: 'education.period1',
      schoolKey: 'education.school1',
      programKey: 'education.program1'
    },
    {
      periodKey: 'education.period2',
      schoolKey: 'education.school2',
      programKey: 'education.program2'
    }
  ];
}
