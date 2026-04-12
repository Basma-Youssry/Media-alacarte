import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { LoginComponent } from './core/auth/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { FeaturesComponent } from './features/features/features.component';
import { BenefitsComponent } from './features/benefits/benefits.component';
import { RequestademoComponent } from './features/requestademo/requestademo.component';
import { ContactusComponent } from './features/contactus/contactus.component';
import { AboutusComponent } from './features/aboutus/aboutus.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
    {path:'', redirectTo:"platform", pathMatch:"full"},
    {path:'', component:MainLayoutComponent, children:[
        {path:"platform", component:HomeComponent, title:"Home page"},
        {  path: 'features',
        loadComponent: () =>
          import('./features/features/features.component').then(m => m.FeaturesComponent),
        title: 'Features page'},
        {
        path: 'benefits',
        loadComponent: () =>
          import('./features/benefits/benefits.component').then(m => m.BenefitsComponent),
        title: 'Benefits page'
      },
        {
        path: 'requestademo',
        loadComponent: () =>
          import('./features/requestademo/requestademo.component').then(m => m.RequestademoComponent),
        title: 'Request-a-Demo page'
      },
        {
        path: 'contact-us',
        loadComponent: () =>
          import('./features/contactus/contactus.component').then(m => m.ContactusComponent),
        title: 'Contact-us page'
      },
         {
        path: 'about-us',
        loadComponent: () =>
          import('./features/aboutus/aboutus.component').then(m => m.AboutusComponent),
        title: 'About-us page'
      } 

    ]},
    {path:'auth', component:AuthLayoutComponent, children:[
        {
        path: 'register',
        loadComponent: () =>
          import('./core/auth/register/register.component').then(m => m.RegisterComponent),
        title: 'Register page'
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./core/auth/login/login.component').then(m => m.LoginComponent),
        title: 'Login page'
      }
    ]},
    {path:'blank', component:BlankLayoutComponent, children:[
       {path:"platform", component:HomeComponent, title:"Home page"},
        {  path: 'features',
        loadComponent: () =>
          import('./features/features/features.component').then(m => m.FeaturesComponent),
        title: 'Features page'},
        {
        path: 'benefits',
        loadComponent: () =>
          import('./features/benefits/benefits.component').then(m => m.BenefitsComponent),
        title: 'Benefits page'
      },
        {
        path: 'requestademo',
        loadComponent: () =>
          import('./features/requestademo/requestademo.component').then(m => m.RequestademoComponent),
        title: 'Request-a-Demo page'
      },
        {
        path: 'contact-us',
        loadComponent: () =>
          import('./features/contactus/contactus.component').then(m => m.ContactusComponent),
        title: 'Contact-us page'
      },
         {
        path: 'about-us',
        loadComponent: () =>
          import('./features/aboutus/aboutus.component').then(m => m.AboutusComponent),
        title: 'About-us page'
      } 
    ]},
    {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Not-found page'
   }
];
