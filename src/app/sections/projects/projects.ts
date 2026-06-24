import { Component } from '@angular/core';

export interface Project {
  name: string;
  description: string;
  highlights: string[];
  tags: string[];
  github?: string;
  diagram?: string; // path to architecture diagram image
  diagramLayout?: 'side' | 'full'; 
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
        "A cloud-native microservices platform built around real SRE and security practices on AWS EKS, with all infrastructure provisioned through Terraform.",
      highlights: [
        'Multi-AZ AWS infrastructure (VPC, EKS, EBS, KMS, Secrets Manager) provisioned with modular Terraform, using remote S3 state with state locking and IRSA-scoped IAM roles so each service only gets the AWS permissions it actually needs',
        'Kubernetes SRE and security fundamentals applied throughout: StatefulSets backed by EBS volumes, resource limits, liveness/readiness probes, HPA v2 and Cluster Autoscaler for scaling, Network Policies, Pod Security Standards, and RBAC',
        'Linkerd service mesh integrated for automatic mTLS encryption between services, with built-in observability into traffic between them',
        'Full Prometheus and Grafana stack covering infrastructure health, application performance, and service mesh metrics in one place',
        'Tetragon (eBPF-based) deployed for kernel-level runtime security monitoring, catching suspicious syscall behavior that application-level monitoring alone would miss'
      ],
      tags: ['Kubernetes', 'AWS EKS', 'Terraform', 'Linkerd', 'Tetragon', 'Prometheus', 'Grafana'],
      github: 'https://github.com/SecureSight-PFA/SecureSight',
      diagram: 'assets/images/pipeline_securesight.svg',
      diagramLayout: 'full'
    },
    {
      name: 'Distributed Observability Platform',
      description:
        "An event-driven monitoring system built to understand how observability pipelines work end to end, from raw metric collection through to alerting and visualization.",
      highlights: [
        'Go producer and consumer services stream system metrics (CPU, memory, disk, network I/O) through a Kafka topic, decoupling collection from processing',
        'Zookeeper handles Kafka coordination: broker metadata and leader election',
        'The consumer exposes a /metrics endpoint scraped by Prometheus, and logs anomalies to a file shipped to Loki via Promtail',
        'The entire stack is containerized with Docker Compose for a single-command setup',
        'Grafana dashboards correlate metric spikes with alert logs side by side, so a CPU spike and its corresponding alert appear on the same timeline'
      ],
      tags: ['Go', 'Kafka', 'Docker', 'Prometheus', 'Loki', 'Grafana'],
      github: 'https://github.com/amalsboui/System-Monitoring-Project',
      diagram: 'assets/images/pipeline_monitoring.png',
      diagramLayout: 'side'
    },
    {
      name: 'Voting DApp',
      description:
        "A full-stack decentralized voting application combining React and Flask with Solidity smart contracts handling the voting logic on-chain, deployed through a complete CI/CD pipeline to Azure.",
      highlights: [
        'React frontend backed by a Flask REST API for auth and business logic, PostgreSQL for user data, and Solidity smart contracts (Hardhat) deployed to the Sepolia testnet via Hardhat Ignition',
        'MetaMask wallet integration with Ethers.js bridging the frontend to the Ethereum blockchain',
        'Candidate images stored on IPFS via Pinata, removing the need to manage separate image storage infrastructure',
        'Frontend CI runs Jest and React Testing Library component tests; backend CI runs pytest against a temporary in-memory database; smart contracts have their own Hardhat test suite',
        'CD builds Docker images for each service, pushes them to Azure Container Registry, and deploys to Azure Kubernetes Service using Kubernetes manifests',
        'All Azure infrastructure (AKS cluster, ACR, VNet, role assignments) is defined and managed through Terraform Cloud for repeatable, auditable provisioning'
      ],
      tags: ['React', 'Flask', 'Solidity', 'Docker', 'AKS', 'Terraform', 'GitHub Actions'],
      github: 'https://github.com/amalsboui/Voting-Dapp', 
      diagram: 'assets/images/pipeline_votingdapp.svg',
      diagramLayout: 'full'
    },
    {
      name: 'PetSit',
      description:
        "A full-stack pet-sitting management platform with role-based access control and a built-in AI assistant for pet-care questions.",
      highlights: [
        'NestJS backend with JWT-based auth, bcrypt password hashing, and custom guards and decorators enforcing three roles: Admin, Owner, and Sitter',
        'Owners create pet-sitting requests, sitters browse and accept or refuse them, with role-filtered result sets so each user only sees what is relevant to them',
        'Real-time notifications over WebSockets: sitters are notified instantly when a new request appears, owners are notified the moment theirs is accepted or refused',
        'Angular 21 frontend built entirely with standalone components',
        'A built-in AI assistant powered by GPT-4o gives short pet-care tips and always defers to a vet for health concerns rather than attempting to diagnose',
        'DTO validation via class-validator on every endpoint, with the GitHub API key kept server-side only'
      ],
      tags: ['NestJS', 'Angular', 'PostgreSQL', 'WebSockets', 'JWT'],
      github: 'https://github.com/amalsboui/PetSit',
      diagram: 'assets/images/pipeline_petsit.png',
      diagramLayout: 'side'
    },
    {
      name: 'Sentiment Analysis MLOps Platform',
      description:
        "An end-to-end MLOps pipeline for a sentiment classifier, focused on wiring together training, storage, and deployment the way a production ML system needs to work.",
      highlights: [
        'A TF-IDF and classifier model trained on the IMDB 50K movie reviews dataset, served through a FastAPI endpoint',
        'Trained models and vectorizers are uploaded to Azure Blob Storage rather than bundled into the Docker image, so retraining does not require rebuilding the API',
        'Two separate Jenkins pipelines: one trains the model and pushes artifacts to Blob Storage, the other builds the Docker image, pushes it to Docker Hub, and deploys the container',
        'Azure infrastructure (storage account, blob containers for models and datasets) is provisioned through Terraform Cloud, with state managed in a dedicated workspace for the project'
      ],
      tags: ['Python', 'FastAPI', 'Docker', 'Jenkins', 'Terraform', 'Azure'],
      github: 'https://github.com/amalsboui/Sentiment-Analysis-MLOps',
      diagram: 'assets/images/pipeline_mlops.png',
      diagramLayout: 'side'
      
    },
  ];
}
