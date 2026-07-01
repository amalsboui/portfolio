import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { Translation } from '../../services/translation/translation';

interface Skill {
  name: string;
  icon?: string;       
}

interface SkillGroup {
  categoryKey: string;  
  accent: string;
  items: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  t = inject(Translation);

   groups: SkillGroup[] = [
    {
      categoryKey: 'skills.cloud', 
      accent: 'var(--blue)',
      items: [
        { name: 'AWS', icon: 'mdi:aws' },
        { name: 'Microsoft Azure', icon: 'mdi:microsoft-azure' },
      ]
    },
    {
      categoryKey: 'skills.iac',  
      accent: 'var(--pink)',
      items: [
        { name: 'Terraform', icon: 'mdi:terraform' },
        { name: 'Ansible', icon: 'mdi:ansible' },
      ]
    },
    {
      categoryKey: 'skills.containers',  
      accent: 'var(--plum)',
      items: [
        { name: 'Docker', icon: 'mdi:docker' },
        { name: 'Kubernetes', icon: 'mdi:kubernetes' },
      ]
    },
    {
      categoryKey: 'skills.cicd',  
      accent: 'var(--blue)',
      items: [
        { name: 'GitHub Actions', icon: 'devicon-plain:githubactions' },
        { name: 'Jenkins', icon: 'file-icons:jenkins' },
      ]
    },
    {
      categoryKey: 'skills.observability',  
      accent: 'var(--pink)',
      items: [
        { name: 'Prometheus', icon: 'simple-icons:prometheus' },
        { name: 'Grafana', icon: 'simple-icons:grafana' },
        { name: 'Loki'},
      ]
    },
    {
      categoryKey: 'skills.networking', 
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
      categoryKey: 'skills.databases',  
      accent: 'var(--blue)',
      items: [
        { name: 'PostgreSQL', icon: 'lineicons:postgresql' },
        { name: 'MySQL', icon: 'lineicons:mysql' },
        { name: 'SQL Server', icon: 'devicon-plain:microsoftsqlserver' },
      ]
    },
    {
      categoryKey: 'skills.os',  
      accent: 'var(--pink)',
      items: [
        { name: 'Linux', icon: 'mdi:linux' },
        { name: 'Ubuntu', icon: 'mdi:ubuntu' },
        { name: 'Debian', icon: 'mdi:debian' },
        { name: 'Windows Server', icon: 'mdi:windows' },
      ]
    },
    {
      categoryKey: 'skills.backend',  
      accent: 'var(--plum)',
      items: [
        { name: 'NestJS', icon: 'file-icons:nestjs' },
        { name: 'Flask', icon: 'mdi:flask' },
        { name: 'FastAPI', icon: 'simple-icons:fastapi' },
        { name: 'Node.js', icon: 'mdi:nodejs' },
      ]
    },
    {
      categoryKey: 'skills.frontend',  
      accent: 'var(--blue)',
      items: [
        { name: 'Angular', icon: 'mdi:angular' },
        { name: 'React', icon: 'mdi:react' },
      ]
    },
    {
      categoryKey: 'skills.languages',  
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
      categoryKey: 'skills.versioncontrol',  
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