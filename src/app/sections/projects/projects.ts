import { Component } from '@angular/core';

export interface Project {
  name: string;
  description: string;
  highlights: string[];
  tags: string[];
  github?: string;
  diagram?: string; // path to architecture diagram image
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
projects: Project[] = [
    {
      name: 'SecureSight',
      description:
        'A cloud-native microservices platform built around SRE and security best practices on AWS EKS.',
      highlights: [
        'Multi-AZ AWS infrastructure (VPC, EKS, EBS, KMS, Secrets Manager) via modular Terraform with remote state and IRSA-scoped IAM',
        'StatefulSets with EBS storage, HPA v2, Cluster Autoscaler, Network Policies, Pod Security Standards, RBAC',
        'Linkerd service mesh for mTLS and observability across services',
        'Full Prometheus + Grafana observability stack, plus Tetragon (eBPF) for kernel-level runtime security'
      ],
      tags: ['Kubernetes', 'AWS EKS', 'Terraform', 'Linkerd', 'Tetragon', 'Prometheus', 'Grafana'],
      github: 'https://github.com/SecureSight-PFA/SecureSight',
      diagram: 'assets/images/pipeline_securesight.svg'
    },
    {
      name: 'Distributed Observability Platform',
      description:
        'A real-time observability pipeline streaming system metrics through Kafka, with full metrics and log correlation in Grafana.',
      highlights: [
        'Go producers/consumers streaming system metrics via Kafka',
        'Prometheus for metrics scraping, Loki + Promtail for centralized log aggregation',
        'Entire stack containerized with Docker Compose',
        'Grafana dashboards correlating metrics and logs for anomaly detection'
      ],
      tags: ['Go', 'Kafka', 'Docker', 'Prometheus', 'Loki', 'Grafana'],
      github: 'https://github.com/amalsboui/System-Monitoring-Project',
      diagram: 'assets/images/pipeline_monitoring.png'
    },
    {
      name: 'Voting DApp',
      description:
        'A full-stack decentralized voting application with smart contracts on Ethereum and a complete CI/CD pipeline to Azure.',
      highlights: [
        'React frontend, Flask REST API, PostgreSQL, Solidity smart contracts deployed to Sepolia testnet',
        'Wallet integration via MetaMask, blockchain interaction through Ethers.js',
        'CI builds and tests frontend and backend independently; CD pushes Docker images to ACR and deploys to AKS',
        'Infrastructure (AKS, ACR, VNet, role assignments) defined and managed with Terraform Cloud'
      ],
      tags: ['React', 'Flask', 'Solidity', 'Docker', 'AKS', 'Terraform', 'GitHub Actions'],
      github: 'https://github.com/amalsboui/Voting-Dapp'
    },
    {
      name: 'PetSit',
      description:
        'A full-stack pet-sitting management platform with role-based access, real-time notifications, and an AI assistant.',
      highlights: [
        'NestJS backend with JWT auth, bcrypt hashing, and role-based guards for Admin, Owner, and Sitter roles',
        'Angular standalone-component frontend',
        'Real-time notifications via WebSockets when requests are created, accepted, or refused',
        'Built-in AI assistant (GPT-4o) giving pet-care tips and recommending vets for health concerns'
      ],
      tags: ['NestJS', 'Angular', 'PostgreSQL', 'WebSockets', 'JWT'],
      github: 'https://github.com/amalsboui/PetSit'
    },
    {
      name: 'Sentiment Analysis MLOps Platform',
      description:
        'An end-to-end MLOps pipeline from model training to production deployment.',
      highlights: [
        'FastAPI service serving a TF-IDF sentiment classifier trained on IMDB reviews',
        'Model artifacts stored in Azure Blob Storage',
        'Jenkins pipelines for model training and for building/pushing/deploying the Docker image',
        'Cloud infrastructure (storage account, blob containers) provisioned via Terraform Cloud'
      ],
      tags: ['Python', 'FastAPI', 'Docker', 'Jenkins', 'Terraform', 'Azure'],
      github: 'https://github.com/amalsboui/Sentiment-Analysis-MLOps',
      diagram: 'assets/images/pipeline_mlops.png'
      
    },
  ];
}
