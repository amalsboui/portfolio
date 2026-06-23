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
      'Automated end-to-end deployment of Mailcow OSS on OpenStack VMs using modular Ansible roles',
      'Exposed services via HAProxy on a bastion host, configured OpenStack security groups',
      'Integrated Mailcow with Odoo ERP and Authentik SSO via OAuth2/OpenID Connect'
    ]
  },
  {
    period: 'Jul 2024 - Aug 2024',
    role: 'Networking Intern',
    org: 'Centre National de l\'Informatique (CNI), Tunisia',
    points: [
      'Designed and deployed a prototype network infrastructure for a three-story organization',
      'Configured routers, switches, VLANs, OSPF, static routing, and HSRP for high availability'
    ]
  }
];
}
