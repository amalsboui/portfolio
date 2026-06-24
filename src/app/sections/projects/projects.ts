import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { Translation } from '../../services/translation';

export interface Project {
  nameKey: string;
  descriptionKey: string;
  highlightKeys: string[];
  tags: string[];
  github?: string;
  diagram?: string;
  diagramLayout?: 'side' | 'full';
}

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  t = inject(Translation);

  projects: Project[] = [
    {
      nameKey: 'project.securesight.name',
      descriptionKey: 'project.securesight.description',
      highlightKeys: [
        'project.securesight.highlight1',
        'project.securesight.highlight2',
        'project.securesight.highlight3',
        'project.securesight.highlight4',
        'project.securesight.highlight5'
      ],
      tags: ['Kubernetes', 'AWS EKS', 'Terraform', 'Linkerd', 'Tetragon', 'Prometheus', 'Grafana'],
      github: 'https://github.com/SecureSight-PFA/SecureSight',
      diagram: 'assets/images/pipeline_securesight.svg',
      diagramLayout: 'full'
    },
    {
      nameKey: 'project.observability.name',
      descriptionKey: 'project.observability.description',
      highlightKeys: [
        'project.observability.highlight1',
        'project.observability.highlight2',
        'project.observability.highlight3',
        'project.observability.highlight4',
        'project.observability.highlight5'
      ],
      tags: ['Go', 'Kafka', 'Docker', 'Prometheus', 'Loki', 'Grafana'],
      github: 'https://github.com/amalsboui/System-Monitoring-Project',
      diagram: 'assets/images/pipeline_monitoring.png',
      diagramLayout: 'side'
    },
    {
      nameKey: 'project.votingdapp.name',
      descriptionKey: 'project.votingdapp.description',
      highlightKeys: [
        'project.votingdapp.highlight1',
        'project.votingdapp.highlight2',
        'project.votingdapp.highlight3',
        'project.votingdapp.highlight4',
        'project.votingdapp.highlight5',
        'project.votingdapp.highlight6'
      ],
      tags: ['React', 'Flask', 'Solidity', 'Docker', 'AKS', 'Terraform', 'GitHub Actions'],
      github: 'https://github.com/amalsboui/Voting-Dapp',
      diagram: 'assets/images/pipeline_votingdapp.svg',
      diagramLayout: 'full'
    },
    {
      nameKey: 'project.petsit.name',
      descriptionKey: 'project.petsit.description',
      highlightKeys: [
        'project.petsit.highlight1',
        'project.petsit.highlight2',
        'project.petsit.highlight3',
        'project.petsit.highlight4',
        'project.petsit.highlight5',
        'project.petsit.highlight6'
      ],
      tags: ['NestJS', 'Angular', 'PostgreSQL', 'WebSockets', 'JWT'],
      github: 'https://github.com/amalsboui/PetSit',
      diagram: 'assets/images/pipeline_petsit.png',
      diagramLayout: 'side'
    },
    {
      nameKey: 'project.mlops.name',
      descriptionKey: 'project.mlops.description',
      highlightKeys: [
        'project.mlops.highlight1',
        'project.mlops.highlight2',
        'project.mlops.highlight3',
        'project.mlops.highlight4'
      ],
      tags: ['Python', 'FastAPI', 'Docker', 'Jenkins', 'Terraform', 'Azure'],
      github: 'https://github.com/amalsboui/Sentiment-Analysis-MLOps',
      diagram: 'assets/images/pipeline_mlops.png',
      diagramLayout: 'side'
    },
  ];
}