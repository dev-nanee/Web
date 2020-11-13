import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { WorkLayoutRoutes } from './work-layout.routing';

import {HomeComponent} from '../../home/home.component';

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(WorkLayoutRoutes),
    ],
  declarations: [
    HomeComponent
  ]
})

export class WorkLayoutModule {}
