import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {RouterModule, Routes,} from '@angular/router';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { ApolloClient ,createNetworkInterface} from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import 'underscore';

import {route} from './routes';
import {blogReducer} from './reducers/blogReducer';
import {authorReducer} from './reducers/authorReducer';

import { AppComponent } from './app.component';
import { ContentAdderComponent } from './components/content-adder/content-adder.component';
import { ContentComponent } from './components/content-parent/content/content.component';
import { ContentInfoComponent } from './components/content-info/content-info.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContentParentComponent } from './components/content-parent/content-parent.component';
import { ContentByFilterComponent } from './components/content-by-filter/content-by-filter.component';
import { TestCheckComponent } from './test-check/test-check.component';

import {CookieServiceService} from './services/cookie-service.service';
import {GraphQLService} from './services/graph-ql.service';
import {BlogEffectService} from './effects/blog-effect.service';

const client = new ApolloClient({
  networkInterface : createNetworkInterface({
    uri: 'http://localhost:8080/graphql'
  }),
});

export function provideClient(): ApolloClient{
  return client;
}

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: true, position: 'right' })
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ContentAdderComponent,
    ContentComponent,
    ContentInfoComponent,
    LoginComponent,
    RegisterComponent,
    TestCheckComponent,
    ContentByFilterComponent,
   ContentParentComponent,
  ],
  entryComponents :[],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ApolloModule.forRoot(provideClient),
    RouterModule.forRoot(route), 
    MaterialModule.forRoot(),
    StoreModule.provideStore({ blogs: blogReducer, author : authorReducer }),
    EffectsModule.run(BlogEffectService),
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule
  ],
  providers: [GraphQLService],
  bootstrap: [AppComponent]
})
export class AppModule { }
