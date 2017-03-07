import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { ContentAdderComponent } from './components/content-adder/content-adder.component';
import { ContentComponent } from './components/content-parent/content/content.component';
import {ContentInfoComponent} from './components/content-info/content-info.component';
import {LoginComponent } from './components/login/login.component';
import {RegisterComponent } from './components/register/register.component';
import { ContentByFilterComponent } from './components/content-by-filter/content-by-filter.component';
import { ContentParentComponent } from './components/content-parent/content-parent.component';
import { TestCheckComponent } from './test-check/test-check.component';

const routes: Routes = [
  {
    path: 'appcomponent',
    component: AppComponent
  },
  {
    path: 'added',
    component: ContentAdderComponent,
  },
  {
  	path : 'test2',
  	component : TestCheckComponent,
  },
  {
  	path: '',
  	component : ContentParentComponent,
  },
  {
    path : 'info/:title',
    component : ContentInfoComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path: 'contentByFilter/:genre',
    component: ContentByFilterComponent
  }
 ];

export const route = routes;
