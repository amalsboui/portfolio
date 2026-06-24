import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  timeline = [
  {
    period: 'Jul 2025 – Aug 2025',
    role: 'DevOps & Cloud Intern',
    org: 'Cloudnet Hosting (Felcloud), Tunisia',
    points: [
      'Automated the end-to-end deployment of Mailcow OSS on OpenStack VMs using modular Ansible roles (Docker, Mailcow, HAProxy, dnsmasq), reducing the full setup to a single playbook run',
      'Exposed services publicly via HAProxy on a bastion host, and configured OpenStack security groups for external access',
      'Integrated Mailcow with Odoo ERP over SMTP/IMAP and with Authentik SSO using OAuth2 and OpenID Connect'
    ]
  },
  {
    period: 'Jul 2024 - Aug 2024',
    role: 'Networking Intern',
    org: 'Centre National de l\'Informatique (CNI), Tunisia',
    points: [
      'Designed and deployed a prototype network infrastructure for a three-story organization',
      'Configured routers, switches, VLANs, OSPF, static routing, and HSRP to ensure high availability and secure, optimized data flow'
    ]
  }
];
}
