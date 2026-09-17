import { Routes } from '@angular/router';
import { AboutPageComponent, ContactPageComponent, ProjectsPageComponent, SkillsPageComponent } from './app.component';

export const routes: Routes = [
  { path: 'about', component: AboutPageComponent, title: 'About | Makabongwe Simelane' },
  { path: 'skills', component: SkillsPageComponent, title: 'Skills | Makabongwe Simelane' },
  { path: 'projects', component: ProjectsPageComponent, title: 'Projects | Makabongwe Simelane' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact | Makabongwe Simelane' },
  { path: '', pathMatch: 'full', redirectTo: 'about' },
  { path: '**', redirectTo: 'about' }
];
