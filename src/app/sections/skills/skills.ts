import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  accent: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  groups: SkillGroup[] = [
  {
    category: 'Cloud & IaC',
    accent: 'var(--blue)',
    items: ['AWS', 'Microsoft Azure', 'Terraform', 'Terraform Cloud', 'OpenStack']
  },
  {
    category: 'DevOps & CI/CD',
    accent: 'var(--pink)',
    items: ['Docker', 'Kubernetes', 'Ansible', 'Jenkins', 'GitHub Actions', 'Nginx', 'HAProxy', 'Helm']
  },
  {
    category: 'Observability',
    accent: 'var(--plum)',
    items: ['Prometheus', 'Grafana', 'Loki', 'Promtail']
  },
  {
    category: 'Systems & Networking',
    accent: 'var(--blue)',
    items: ['Linux', 'Ubuntu', 'VLANs', 'OSPF', 'HSRP', 'ACLs', 'Bash']
  },
  {
    category: 'Databases',
    accent: 'var(--pink)',
    items: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'SQLite']
  },
  {
    category: 'Backend & Frameworks',
    accent: 'var(--plum)',
    items: ['NestJS', 'Flask', 'FastAPI', 'Node.js']
  },
  {
    category: 'Frontend',
    accent: 'var(--blue)',
    items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS']
  },
  {
    category: 'Programming Languages',
    accent: 'var(--pink)',
    items: ['Python', 'C', 'C++', 'Java', 'SQL', 'PHP']
  },
  {
    category: 'Tools & Platforms',
    accent: 'var(--plum)',
    items: ['Git', 'GitHub', 'Postman']
  },
];
}
