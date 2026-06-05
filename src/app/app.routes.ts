import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

export const routes: Routes = [
    {   path: '', 
        component: MainLayout,
        children: [
        {path:'', redirectTo: 'home', pathMatch: 'full'},
        {path:'home', component: Hero},
        {path:'about', component: About},
        {path: 'skills', component: Skills},
        {path: 'projects', component: Projects},
        {path: 'contact', component: Contact},
        ]
    },
    {     path: '**', redirectTo: '' }
]