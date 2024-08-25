import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
const routeConfig: Routes = [];

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'details', component: DetailsComponent, title: 'Detail Page' },
];
export default routeConfig;
