import { Language } from './translation';

export type TranslationKey = 
  // Navbar
  | 'nav.about'
  | 'nav.experience'
  | 'nav.certifications'
  | 'nav.skills'
  | 'nav.projects'
  | 'nav.contact'
  | 'nav.source'
  // Hero
  | 'hero.whoami'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.description'
  | 'hero.projects'
  | 'hero.contact'
  | 'hero.year'
  | 'hero.certs'
  // About
  | 'about.title'
  | 'about.description'
  | 'about.education'
  | 'about.certified'
  | 'about.focus'
  | 'about.location'
  | 'about.insat'
  | 'about.certs'
  | 'about.focusText'
  | 'about.locationText'
  // Contact
  | 'contact.title'
  | 'contact.description'
  // Certifications
| 'certifications.title'
| 'certifications.view'
| 'certification.associate.name'
| 'certification.associate.issuer'
| 'certification.practitioner.name'
| 'certification.practitioner.issuer'
  // Certifications
  | 'certifications.title'
  | 'certifications.view'
  // Projects - UI
  | 'projects.title'
  | 'projects.github'
  | 'projects.diagram'
  | 'projects.click'
  // Projects - SecureSight
  | 'project.securesight.name'
  | 'project.securesight.description'
  | 'project.securesight.highlight1'
  | 'project.securesight.highlight2'
  | 'project.securesight.highlight3'
  | 'project.securesight.highlight4'
  | 'project.securesight.highlight5'
  // Projects - Observability
  | 'project.observability.name'
  | 'project.observability.description'
  | 'project.observability.highlight1'
  | 'project.observability.highlight2'
  | 'project.observability.highlight3'
  | 'project.observability.highlight4'
  | 'project.observability.highlight5'
  // Projects - Voting DApp
  | 'project.votingdapp.name'
  | 'project.votingdapp.description'
  | 'project.votingdapp.highlight1'
  | 'project.votingdapp.highlight2'
  | 'project.votingdapp.highlight3'
  | 'project.votingdapp.highlight4'
  | 'project.votingdapp.highlight5'
  | 'project.votingdapp.highlight6'
  // Projects - PetSit
  | 'project.petsit.name'
  | 'project.petsit.description'
  | 'project.petsit.highlight1'
  | 'project.petsit.highlight2'
  | 'project.petsit.highlight3'
  | 'project.petsit.highlight4'
  | 'project.petsit.highlight5'
  | 'project.petsit.highlight6'
  // Projects - MLOps
  | 'project.mlops.name'
  | 'project.mlops.description'
  | 'project.mlops.highlight1'
  | 'project.mlops.highlight2'
  | 'project.mlops.highlight3'
  | 'project.mlops.highlight4'
  // Skills
  | 'skills.title'
  // Skills - Categories
  | 'skills.cloud'
  | 'skills.iac'
  | 'skills.containers'
  | 'skills.cicd'
  | 'skills.observability'
  | 'skills.networking'
  | 'skills.databases'
  | 'skills.os'
  | 'skills.backend'
  | 'skills.frontend'
  | 'skills.languages'
  | 'skills.versioncontrol'
  // Experience
  | 'experience.title'
  | 'experience.period1'
  | 'experience.role1'
  | 'experience.org1'
  | 'experience.point1_1'
  | 'experience.point1_2'
  | 'experience.point1_3'
  | 'experience.period2'
  | 'experience.role2'
  | 'experience.org2'
  | 'experience.point2_1'
  | 'experience.point2_2'
  | 'experience.point2_3'
  // Footer
  | 'footer.built'
  | 'footer.source';

export const translations: Record<TranslationKey, Record<Language, string>> = {
  // Navbar
  'nav.about': { en: 'About', fr: 'À propos' },
  'nav.experience': { en: 'Experience', fr: 'Expérience' },
  'nav.certifications': { en: 'Certifications', fr: 'Certifications' },
  'nav.skills': { en: 'Skills', fr: 'Compétences' },
  'nav.projects': { en: 'Projects', fr: 'Projets' },
  'nav.contact': { en: 'Contact', fr: 'Contact' },
  'nav.source': { en: 'Source', fr: 'Source' },

  // Hero
  'hero.whoami': { en: 'whoami', fr: 'qui suis-je' },
  'hero.title': { en: 'Amal Sboui', fr: 'Amal Sboui' },
  'hero.subtitle': { en: 'ICT Engineering Student', fr: 'Étudiante ingénieure en Réseaux et Télécommunications' },
  'hero.description': {
    en: 'I design, build, and automate cloud infrastructure, pipelines, containers, and everything in between.',
    fr: 'Je conçois, construis et automatise l\'infrastructure cloud, les pipelines, les conteneurs et tout ce qui se trouve entre les deux.'
  },
  'hero.projects': { en: 'View projects', fr: 'Voir les projets' },
  'hero.contact': { en: 'Get in touch', fr: 'Me contacter' },
  'hero.year': { en: 'Year ICT Engineering', fr: 'Année Ingénierie ICT' },
  'hero.certs': { en: 'AWS Certifications', fr: 'Certifications AWS' },

  // About
  'about.title': { en: 'About', fr: 'À propos' },
  'about.description': {
    en: "I'm a fourth-year Networking and Telecommunications Engineering student at INSAT. What pulls me in is the architecture side of infrastructure: why a system holds up under load, what breaks first when it doesn't, and how a few good design decisions early on prevent a lot of pain later. Most of my projects end up being a way to dig into that, through infrastructure as code, CI/CD pipelines, container orchestration, and observability stacks, on AWS, Azure, and self-hosted setups alike.",
    fr: "Je suis étudiante en 4ème année d'ingénierie Réseaux et Télécommunications à l'INSAT. Ce qui m'attire, c'est l'architecture des systèmes : pourquoi un système tient sous charge, ce qui casse en premier, et comment de bonnes décisions de conception évitent beaucoup de problèmes. La plupart de mes projets explorent ces aspects à travers l'infrastructure as code, les pipelines CI/CD, l'orchestration de conteneurs et les stacks d'observabilité, sur AWS, Azure et des environnements auto-hébergés."
  },
  'about.education': { en: 'Education', fr: 'Formation' },
  'about.certified': { en: 'Certified', fr: 'Certifiée' },
  'about.focus': { en: 'Focus', fr: 'Spécialisation' },
  'about.location': { en: 'Based in', fr: 'Basée à' },
  'about.insat': { en: 'INSAT, Tunisia', fr: 'INSAT, Tunisie' },
  'about.certs': { en: 'AWS SAA & Cloud Practitioner', fr: 'AWS SAA & Cloud Practitioner' },
  'about.focusText': { en: 'Cloud, DevOps, SRE', fr: 'Cloud, DevOps, SRE' },
  'about.locationText': { en: 'Tunisia', fr: 'Tunisie' },

  // Contact
  'contact.title': { en: 'Contact', fr: 'Contact' },
  'contact.description': {
    en: "I'm open to internships, junior positions, and interesting side projects. If you want to talk infrastructure, automation, or just say hi. You can reach out through any of the channels below.",
    fr: "Je suis ouverte aux stages, aux postes juniors et aux projets intéressants. Si vous voulez parler d'infrastructure, d'automatisation ou juste dire bonjour. Vous pouvez me contacter via les canaux ci-dessous."
  },

    //Certifications
    'certification.associate.name': { 
    en: 'AWS Certified Solutions Architect – Associate', 
    fr: 'AWS Certified Solutions Architect – Associate' 
    },
    'certification.associate.issuer': { 
    en: 'Amazon Web Services', 
    fr: 'Amazon Web Services' 
    },
    'certification.practitioner.name': { 
    en: 'AWS Certified Cloud Practitioner', 
    fr: 'AWS Certified Cloud Practitioner' 
    },
    'certification.practitioner.issuer': { 
    en: 'Amazon Web Services', 
    fr: 'Amazon Web Services' 
    },

  // Certifications
  'certifications.title': { en: 'Certifications', fr: 'Certifications' },
  'certifications.view': { en: 'View credential', fr: 'Voir le certificat' },

  // Projects - UI
  'projects.title': { en: 'Projects', fr: 'Projets' },
  'projects.github': { en: 'View on GitHub', fr: 'Voir sur GitHub' },
  'projects.diagram': { en: 'diagram coming soon', fr: 'diagramme bientôt disponible' },
  'projects.click': { en: 'click to view full size', fr: 'cliquez pour agrandir' },

  // Projects - SecureSight
  'project.securesight.name': { en: 'SecureSight', fr: 'SecureSight' },
  'project.securesight.description': {
    en: 'A cloud-native microservices platform built around real SRE and security practices on AWS EKS, with all infrastructure provisioned through Terraform.',
    fr: 'Une plateforme de microservices cloud-native construite autour des pratiques SRE et de sécurité sur AWS EKS, avec toute l\'infrastructure provisionnée via Terraform.'
  },
  'project.securesight.highlight1': {
    en: 'Multi-AZ AWS infrastructure (VPC, EKS, EBS, KMS, Secrets Manager) provisioned with modular Terraform, using remote S3 state with state locking and IRSA-scoped IAM roles so each service only gets the AWS permissions it actually needs',
    fr: 'Infrastructure AWS multi-AZ (VPC, EKS, EBS, KMS, Secrets Manager) provisionnée avec Terraform modulaire, utilisant un état S3 distant avec verrouillage et des rôles IAM IRSA pour que chaque service n\'ait que les permissions AWS dont il a besoin'
  },
  'project.securesight.highlight2': {
    en: 'Kubernetes SRE and security fundamentals applied throughout: StatefulSets backed by EBS volumes, resource limits, liveness/readiness probes, HPA v2 and Cluster Autoscaler for scaling, Network Policies, Pod Security Standards, and RBAC',
    fr: 'Fondamentaux SRE et sécurité Kubernetes appliqués partout : StatefulSets avec volumes EBS, limites de ressources, sondes liveness/readiness, HPA v2 et Cluster Autoscaler, Network Policies, Pod Security Standards et RBAC'
  },
  'project.securesight.highlight3': {
    en: 'Linkerd service mesh integrated for automatic mTLS encryption between services, with built-in observability into traffic between them',
    fr: 'Linkerd service mesh intégré pour le chiffrement mTLS automatique entre les services, avec observabilité intégrée du trafic entre eux'
  },
  'project.securesight.highlight4': {
    en: 'Full Prometheus and Grafana stack covering infrastructure health, application performance, and service mesh metrics in one place',
    fr: 'Stack Prometheus et Grafana complète couvrant la santé de l\'infrastructure, les performances des applications et les métriques du service mesh au même endroit'
  },
  'project.securesight.highlight5': {
    en: 'Tetragon (eBPF-based) deployed for kernel-level runtime security monitoring, catching suspicious syscall behavior that application-level monitoring alone would miss',
    fr: 'Tetragon (basé sur eBPF) déployé pour la surveillance de sécurité au niveau du noyau, détectant les comportements suspects d\'appels système que la surveillance au niveau application ne verrait pas'
  },

  // Projects - Observability
  'project.observability.name': { en: 'Distributed Observability Platform', fr: 'Plateforme d\'Observabilité Distribuée' },
  'project.observability.description': {
    en: 'An event-driven monitoring system built to understand how observability pipelines work end to end, from raw metric collection through to alerting and visualization.',
    fr: 'Un système de monitoring événementiel conçu pour comprendre le fonctionnement des pipelines d\'observabilité de bout en bout, de la collecte de métriques brutes à l\'alerte et la visualisation.'
  },
  'project.observability.highlight1': {
    en: 'Go producer and consumer services stream system metrics (CPU, memory, disk, network I/O) through a Kafka topic, decoupling collection from processing',
    fr: 'Les services producteur et consommateur Go diffusent les métriques système (CPU, mémoire, disque, I/O réseau) via un topic Kafka, découplant la collecte du traitement'
  },
  'project.observability.highlight2': {
    en: 'Zookeeper handles Kafka coordination: broker metadata and leader election',
    fr: 'Zookeeper gère la coordination Kafka : métadonnées des brokers et élection du leader'
  },
  'project.observability.highlight3': {
    en: 'The consumer exposes a /metrics endpoint scraped by Prometheus, and logs anomalies to a file shipped to Loki via Promtail',
    fr: 'Le consommateur expose un endpoint /metrics scrapé par Prometheus, et enregistre les anomalies dans un fichier envoyé à Loki via Promtail'
  },
  'project.observability.highlight4': {
    en: 'The entire stack is containerized with Docker Compose for a single-command setup',
    fr: 'Toute la stack est conteneurisée avec Docker Compose pour une installation en une seule commande'
  },
  'project.observability.highlight5': {
    en: 'Grafana dashboards correlate metric spikes with alert logs side by side, so a CPU spike and its corresponding alert appear on the same timeline',
    fr: 'Les tableaux de bord Grafana corrèlent les pics de métriques avec les journaux d\'alerte côte à côte, de sorte qu\'un pic CPU et son alerte correspondante apparaissent sur la même timeline'
  },

  // Projects - Voting DApp
  'project.votingdapp.name': { en: 'Voting DApp', fr: 'Voting DApp' },
  'project.votingdapp.description': {
    en: 'A full-stack decentralized voting application combining React and Flask with Solidity smart contracts handling the voting logic on-chain, deployed through a complete CI/CD pipeline to Azure.',
    fr: 'Une application de vote décentralisée full-stack combinant React et Flask avec des smart contracts Solidity gérant la logique de vote on-chain, déployée via un pipeline CI/CD complet sur Azure.'
  },
  'project.votingdapp.highlight1': {
    en: 'React frontend backed by a Flask REST API for auth and business logic, PostgreSQL for user data, and Solidity smart contracts (Hardhat) deployed to the Sepolia testnet via Hardhat Ignition',
    fr: 'Frontend React avec une API REST Flask pour l\'auth et la logique métier, PostgreSQL pour les données utilisateur, et smart contracts Solidity (Hardhat) déployés sur Sepolia via Hardhat Ignition'
  },
  'project.votingdapp.highlight2': {
    en: 'MetaMask wallet integration with Ethers.js bridging the frontend to the Ethereum blockchain',
    fr: 'Intégration du portefeuille MetaMask avec Ethers.js faisant le pont entre le frontend et la blockchain Ethereum'
  },
  'project.votingdapp.highlight3': {
    en: 'Candidate images stored on IPFS via Pinata, removing the need to manage separate image storage infrastructure',
    fr: 'Images des candidats stockées sur IPFS via Pinata, éliminant le besoin de gérer une infrastructure de stockage d\'images séparée'
  },
  'project.votingdapp.highlight4': {
    en: 'Frontend CI runs Jest and React Testing Library component tests; backend CI runs pytest against a temporary in-memory database; smart contracts have their own Hardhat test suite',
    fr: 'CI frontend exécute les tests Jest et React Testing Library ; CI backend exécute pytest sur une base de données temporaire en mémoire ; les smart contracts ont leur propre suite de tests Hardhat'
  },
  'project.votingdapp.highlight5': {
    en: 'CD builds Docker images for each service, pushes them to Azure Container Registry, and deploys to Azure Kubernetes Service using Kubernetes manifests',
    fr: 'CD construit les images Docker pour chaque service, les pousse vers Azure Container Registry, et les déploie sur Azure Kubernetes Service avec des manifests Kubernetes'
  },
  'project.votingdapp.highlight6': {
    en: 'All Azure infrastructure (AKS cluster, ACR, VNet, role assignments) is defined and managed through Terraform Cloud for repeatable, auditable provisioning',
    fr: 'Toute l\'infrastructure Azure (cluster AKS, ACR, VNet, assignments de rôles) est définie et gérée via Terraform Cloud pour un provisionnement reproductible et vérifiable'
  },

  // Projects - PetSit
  'project.petsit.name': { en: 'PetSit', fr: 'PetSit' },
  'project.petsit.description': {
    en: 'A full-stack pet-sitting management platform with role-based access control and a built-in AI assistant for pet-care questions.',
    fr: 'Une plateforme de gestion de pet-sitting full-stack avec contrôle d\'accès basé sur les rôles et un assistant IA intégré pour les questions sur les soins aux animaux.'
  },
  'project.petsit.highlight1': {
    en: 'NestJS backend with JWT-based auth, bcrypt password hashing, and custom guards and decorators enforcing three roles: Admin, Owner, and Sitter',
    fr: 'Backend NestJS avec auth JWT, hachage de mots de passe bcrypt, et guards et décorateurs personnalisés appliquant trois rôles : Admin, Owner et Sitter'
  },
  'project.petsit.highlight2': {
    en: 'Owners create pet-sitting requests, sitters browse and accept or refuse them, with role-filtered result sets so each user only sees what is relevant to them',
    fr: 'Les owners créent des demandes de pet-sitting, les sitters parcourent et acceptent ou refusent, avec des ensembles de résultats filtrés par rôle pour que chaque utilisateur ne voie que ce qui lui est pertinent'
  },
  'project.petsit.highlight3': {
    en: 'Real-time notifications over WebSockets: sitters are notified instantly when a new request appears, owners are notified the moment theirs is accepted or refused',
    fr: 'Notifications en temps réel via WebSockets : les sitters sont notifiés instantanément quand une nouvelle demande apparaît, les owners sont notifiés dès que la leur est acceptée ou refusée'
  },
  'project.petsit.highlight4': {
    en: 'Angular 21 frontend built entirely with standalone components',
    fr: 'Frontend Angular 21 construit entièrement avec des composants standalone'
  },
  'project.petsit.highlight5': {
    en: 'A built-in AI assistant powered by GPT-4o gives short pet-care tips and always defers to a vet for health concerns rather than attempting to diagnose',
    fr: 'Un assistant IA intégré propulsé par GPT-4o donne des conseils courts sur les soins aux animaux et renvoie toujours à un vétérinaire pour les problèmes de santé plutôt que de tenter de diagnostiquer'
  },
  'project.petsit.highlight6': {
    en: 'DTO validation via class-validator on every endpoint, with the GitHub API key kept server-side only',
    fr: 'Validation DTO via class-validator sur chaque endpoint, avec la clé API GitHub gardée uniquement côté serveur'
  },

  // Projects - MLOps
  'project.mlops.name': { en: 'Sentiment Analysis MLOps Platform', fr: 'Plateforme MLOps d\'Analyse de Sentiment' },
  'project.mlops.description': {
    en: 'An end-to-end MLOps pipeline for a sentiment classifier, focused on wiring together training, storage, and deployment the way a production ML system needs to work.',
    fr: 'Un pipeline MLOps de bout en bout pour un classifieur de sentiment, axé sur l\'intégration de l\'entraînement, du stockage et du déploiement comme un système ML en production doit fonctionner.'
  },
  'project.mlops.highlight1': {
    en: 'A TF-IDF and classifier model trained on the IMDB 50K movie reviews dataset, served through a FastAPI endpoint',
    fr: 'Un modèle TF-IDF et classifieur entraîné sur le dataset IMDB 50K de critiques de films, servi via un endpoint FastAPI'
  },
  'project.mlops.highlight2': {
    en: 'Trained models and vectorizers are uploaded to Azure Blob Storage rather than bundled into the Docker image, so retraining does not require rebuilding the API',
    fr: 'Les modèles entraînés et vectorizers sont uploadés vers Azure Blob Storage plutôt que d\'être inclus dans l\'image Docker, de sorte que le réentraînement ne nécessite pas de reconstruire l\'API'
  },
  'project.mlops.highlight3': {
    en: 'Two separate Jenkins pipelines: one trains the model and pushes artifacts to Blob Storage, the other builds the Docker image, pushes it to Docker Hub, and deploys the container',
    fr: 'Deux pipelines Jenkins séparés : un entraîne le modèle et pousse les artefacts vers Blob Storage, l\'autre construit l\'image Docker, la pousse vers Docker Hub et déploie le conteneur'
  },
  'project.mlops.highlight4': {
    en: 'Azure infrastructure (storage account, blob containers for models and datasets) is provisioned through Terraform Cloud, with state managed in a dedicated workspace for the project',
    fr: 'L\'infrastructure Azure (compte de stockage, conteneurs blob pour les modèles et datasets) est provisionnée via Terraform Cloud, avec l\'état géré dans un espace de travail dédié au projet'
  },

  // Skills
  'skills.title': { en: 'Skills', fr: 'Compétences' },
  // Skills - Categories
  'skills.cloud': { en: 'Cloud Platforms', fr: 'Plateformes Cloud' },
  'skills.iac': { en: 'Infrastructure as Code', fr: 'Infrastructure as Code' },
  'skills.containers': { en: 'Containers & Orchestration', fr: 'Conteneurs & Orchestration' },
  'skills.cicd': { en: 'CI/CD', fr: 'CI/CD' },
  'skills.observability': { en: 'Observability & Monitoring', fr: 'Observabilité & Monitoring' },
  'skills.networking': { en: 'Networking & Security', fr: 'Réseaux & Sécurité' },
  'skills.databases': { en: 'Databases', fr: 'Bases de Données' },
  'skills.os': { en: 'Operating Systems', fr: 'Systèmes d\'Exploitation' },
  'skills.backend': { en: 'Backend Frameworks', fr: 'Frameworks Backend' },
  'skills.frontend': { en: 'Frontend', fr: 'Frontend' },
  'skills.languages': { en: 'Programming Languages', fr: 'Langages de Programmation' },
  'skills.versioncontrol': { en: 'Version Control & Collaboration', fr: 'Contrôle de Version & Collaboration' },

  // Experience
  'experience.title': { en: 'Experience', fr: 'Expérience' },
  'experience.period1': { en: 'Jul 2025 – Aug 2025', fr: 'Juillet 2025 – Août 2025' },
  'experience.role1': { en: 'DevOps & Cloud Intern', fr: 'Stagiaire DevOps & Cloud' },
  'experience.org1': { en: 'Cloudnet Hosting (Felcloud), Tunisia', fr: 'Cloudnet Hosting (Felcloud), Tunisie' },
  'experience.point1_1': {
    en: 'Automated the end-to-end deployment of Mailcow OSS on OpenStack VMs using modular Ansible roles (Docker, Mailcow, HAProxy, dnsmasq), reducing the full setup to a single playbook run',
    fr: 'Automatisation du déploiement de Mailcow OSS sur VMs OpenStack avec des rôles Ansible modulaires (Docker, Mailcow, HAProxy, dnsmasq), réduisant l\'installation à un seul playbook'
  },
  'experience.point1_2': {
    en: 'Exposed services publicly via HAProxy on a bastion host, and configured OpenStack security groups for external access',
    fr: 'Exposition des services via HAProxy sur un bastion, et configuration des groupes de sécurité OpenStack pour l\'accès externe'
  },
  'experience.point1_3': {
    en: 'Integrated Mailcow with Odoo ERP over SMTP/IMAP and with Authentik SSO using OAuth2 and OpenID Connect',
    fr: 'Intégration de Mailcow avec Odoo ERP via SMTP/IMAP et avec Authentik SSO via OAuth2 et OpenID Connect'
  },
  'experience.period2': { en: 'Jul 2024 - Aug 2024', fr: 'Juillet 2024 - Août 2024' },
  'experience.role2': { en: 'Networking Intern', fr: 'Stagiaire Réseaux' },
  'experience.org2': { en: 'Centre National de l\'Informatique (CNI), Tunisia', fr: 'Centre National de l\'Informatique (CNI), Tunisie' },
  'experience.point2_1': {
    en: 'Designed and deployed a prototype network infrastructure for a three-story organization',
    fr: 'Conception et déploiement d\'une infrastructure réseau prototype pour une organisation de trois étages'
  },
  'experience.point2_2': {
    en: 'Configured routers, switches, VLANs, OSPF, static routing, and HSRP to ensure high availability and secure, optimized data flow',
    fr: 'Configuration des routeurs, switches, VLANs, OSPF, routage statique et HSRP pour garantir la haute disponibilité et un flux de données sécurisé et optimisé'
  },
  'experience.point2_3': {
    en: 'Documented the network architecture and delivered a technical report covering design choices, configuration steps, and validation tests',
    fr: 'Documentation de l\'architecture réseau et remise d\'un rapport technique couvrant les choix de conception, les étapes de configuration et les tests de validation'
  },
  // Footer
  'footer.built': { en: 'Built by', fr: 'Conçu par' },
  'footer.source': { en: 'Source Code', fr: 'Code Source' },
};