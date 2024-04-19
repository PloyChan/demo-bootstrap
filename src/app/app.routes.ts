import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./page/first-page/first-page.component').then(e => e.FirstPageComponent)
      },
      {
        path: 'container',
        loadComponent: () => import('./page/container/container.component').then(e => e.ContainerComponent)
      }
    ]
  }
];
