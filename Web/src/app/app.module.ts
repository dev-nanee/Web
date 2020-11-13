import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

import { WorkLayoutComponent} from './layouts/work-layout/work-layout.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule
  ],
  declarations: [
    AppComponent,
    WorkLayoutComponent,
    LoginComponent,
    CustomerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
