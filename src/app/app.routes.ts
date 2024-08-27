import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { YourcartComponent } from './yourcart/yourcart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'details/:id', component: DetailsComponent, title: 'Detail Page' },
  { path: 'yourcart', component: YourcartComponent, title: 'Your Cart Page' },
];

export default routes;
