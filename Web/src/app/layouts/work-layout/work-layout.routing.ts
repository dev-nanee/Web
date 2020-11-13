import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import {CustomerComponent} from '../../customer/customer.component';

export const WorkLayoutRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customer', component: CustomerComponent }
];
