import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignModule } from './design/design.module';
import { SharedModule } from './shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ExamplesModule } from './examples/examples.module';
import { OrderModule } from './order/order.module';
import { CommonModule } from '@angular/common';
import { MuziehComponentsModule } from 'muzieh-ngcomponents';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignModule,
    ExamplesModule,
    SharedModule,
    CommonModule,
    OrderModule,
    NgbModule,
    MuziehComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
