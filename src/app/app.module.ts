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
import { ResultTableComponent } from './result-table/result-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignModule,
    ExamplesModule,
    SharedModule,
    CommonModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
