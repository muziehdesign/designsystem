import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignModule } from './design/design.module';
import { SharedModule } from './shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ExamplesModule } from './examples/examples.module';
import { CommonModule } from 'kitchensink/common';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignModule,
    ExamplesModule,
    SharedModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
