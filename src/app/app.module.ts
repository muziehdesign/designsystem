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
import { CustomErrorHandler } from './custom-error-handler';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DemoContainerComponent } from './shared/demo-container/demo-container.component';
import { DemoButtonsComponent } from './button-design/demo-buttons/demo-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DemoButtonsComponent
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
    NoopAnimationsModule,
  ],
  providers: [CustomErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
