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
        { name: 'AWS', icon: 'amazonaws' },
        { name: 'Microsoft Azure', icon: 'microsoftazure' },
        { name: 'Google Cloud', icon: 'googlecloud' },
        { name: 'OpenStack', icon: 'openstack' },
        { name: 'DigitalOcean', icon: 'digitalocean' },
      ]
    },
    {
      category: 'Infrastructure as Code',
      accent: 'var(--pink)',
      items: [
        { name: 'Terraform', icon: 'terraform' },
        { name: 'Ansible', icon: 'ansible' },
      ]
    },
    {
      category: 'Containers & Orchestration',
      accent: 'var(--plum)',
      items: [
        { name: 'Docker', icon: 'docker' },
        { name: 'Kubernetes', icon: 'kubernetes' },
      ]
    },
    {
      category: 'CI/CD',
      accent: 'var(--blue)',
      items: [
        { name: 'GitHub Actions', icon: 'githubactions' },
        { name: 'Jenkins', icon: 'jenkins' },
      ]
    },
    {
      category: 'Observability & Monitoring',
      accent: 'var(--pink)',
      items: [
        { name: 'Prometheus', icon: 'prometheus' },
        { name: 'Grafana', icon: 'grafana' },
        { name: 'Loki', icon: 'grafana' },
      ]
    },
    {
      category: 'Networking & Security',
      accent: 'var(--plum)',
      items: [
        { name: 'Nginx', icon: 'nginx' },
        { name: 'HAProxy', icon: 'haproxy' },
        { name: 'VLANs' },
        { name: 'OSPF' },
        { name: 'HSRP' },
        { name: 'Wireshark', icon: 'wireshark' },
      ]
    },
    {
      category: 'Databases',
      accent: 'var(--blue)',
      items: [
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'SQL Server', icon: 'microsoftsqlserver' },
        { name: 'SQLite', icon: 'sqlite' },
      ]
    },
    {
      category: 'Operating Systems',
      accent: 'var(--pink)',
      items: [
        { name: 'Linux', icon: 'linux' },
        { name: 'Ubuntu', icon: 'ubuntu' },
        { name: 'Debian', icon: 'debian' },
        { name: 'Windows Server', icon: 'windows' },
      ]
    },
    {
      category: 'Backend Frameworks',
      accent: 'var(--plum)',
      items: [
        { name: 'NestJS', icon: 'nestjs' },
        { name: 'Flask', icon: 'flask' },
        { name: 'FastAPI', icon: 'fastapi' },
        { name: 'Node.js', icon: 'nodedotjs' },
        { name: 'Spring Boot', icon: 'springboot' },
      ]
    },
    {
      category: 'Frontend',
      accent: 'var(--blue)',
      items: [
        { name: 'Angular', icon: 'angular' },
        { name: 'React', icon: 'react' },
        { name: 'TypeScript', icon: 'typescript' },      ]
    },
    {
      category: 'Programming Languages',
      accent: 'var(--pink)',
      items: [
        { name: 'Python', icon: 'python' },
        { name: 'Java', icon: 'openjdk' },
        { name: 'C', icon: 'c' },
        { name: 'C++', icon: 'cplusplus' },
        { name: 'Bash', icon: 'gnubash' },
        { name: 'SQL' },
      ]
    },
    {
      category: 'Version Control & Collaboration',
      accent: 'var(--plum)',
      items: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
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
