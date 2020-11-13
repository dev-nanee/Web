import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import {WorkLayoutComponent} from './layouts/work-layout/work-layout.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, {
    path: '',
    component: WorkLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/work-layout/work-layout.module').then(mod => mod.WorkLayoutModule),
    }]
  },
  { path: 'login', component: LoginComponent }
  ];

//
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
