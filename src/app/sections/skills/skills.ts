import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon?: string;       
}

interface SkillGroup {
  category: string;
  accent: string;
  items: Skill[];
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
      category: 'Cloud Platforms',
      accent: 'var(--blue)',
      items: [
        { name: 'AWS', icon: 'mdi:aws' },
        { name: 'Microsoft Azure', icon: 'mdi:microsoft-azure' },
      ]
    },
    {
      category: 'Infrastructure as Code',
      accent: 'var(--pink)',
      items: [
        { name: 'Terraform', icon: 'mdi:terraform' },
        { name: 'Ansible', icon: 'mdi:ansible' },
      ]
    },
    {
      category: 'Containers & Orchestration',
      accent: 'var(--plum)',
      items: [
        { name: 'Docker', icon: 'mdi:docker' },
        { name: 'Kubernetes', icon: 'mdi:kubernetes' },
      ]
    },
    {
      category: 'CI/CD',
      accent: 'var(--blue)',
      items: [
        { name: 'GitHub Actions', icon: 'devicon-plain:githubactions' },
        { name: 'Jenkins', icon: 'file-icons:jenkins' },
      ]
    },
    {
      category: 'Observability & Monitoring',
      accent: 'var(--pink)',
      items: [
        { name: 'Prometheus', icon: 'simple-icons:prometheus' },
        { name: 'Grafana', icon: 'simple-icons:grafana' },
        { name: 'Loki'},
      ]
    },
    {
      category: 'Networking & Security',
      accent: 'var(--plum)',
      items: [
        { name: 'Nginx', icon: 'simple-icons:nginx' },
        { name: 'HAProxy', icon: 'devicon-plain:haproxy' },
        { name: 'VLANs' },
        { name: 'OSPF' },
        { name: 'HSRP' },
      ]
    },
    {
      category: 'Databases',
      accent: 'var(--blue)',
      items: [
        { name: 'PostgreSQL', icon: 'lineicons:postgresql' },
        { name: 'MySQL', icon: 'lineicons:mysql' },
        { name: 'SQL Server', icon: 'devicon-plain:microsoftsqlserver' },
      ]
    },
    {
      category: 'Operating Systems',
      accent: 'var(--pink)',
      items: [
        { name: 'Linux', icon: 'mdi:linux' },
        { name: 'Ubuntu', icon: 'mdi:ubuntu' },
        { name: 'Debian', icon: 'mdi:debian' },
        { name: 'Windows Server', icon: 'mdi:windows' },
      ]
    },
    {
      category: 'Backend Frameworks',
      accent: 'var(--plum)',
      items: [
        { name: 'NestJS', icon: 'file-icons:nestjs' },
        { name: 'Flask', icon: 'mdi:flask' },
        { name: 'FastAPI', icon: 'simple-icons:fastapi' },
        { name: 'Node.js', icon: 'mdi:nodejs' },
      ]
    },
    {
      category: 'Frontend',
      accent: 'var(--blue)',
      items: [
        { name: 'Angular', icon: 'mdi:angular' },
        { name: 'React', icon: 'mdi:react' },
      ]
    },
    {
      category: 'Programming Languages',
      accent: 'var(--pink)',
      items: [
        { name: 'Python', icon: 'akar-icons:python-fill' },
        { name: 'Java', icon: 'ri:java-fill' },
        { name: 'C' },
        { name: 'C++' },
        { name: 'Bash', icon: 'hugeicons:bash' },
        { name: 'SQL' },
      ]
    },
    {
      category: 'Version Control & Collaboration',
      accent: 'var(--plum)',
      items: [
        { name: 'Git', icon: 'mdi:git' },
        { name: 'GitHub', icon: 'mdi:github' },
      ]
    },
  ];

  iconUrl(slug: string): string {
    return `https://cdn.simpleicons.org/${slug}/${this.hexColor()}`;
  }

  private hexColor(): string {
    return '8b8aa3'; 
  }
}
