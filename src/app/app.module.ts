import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ExamplesModule } from './examples/examples.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomErrorHandler } from './custom-error-handler';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { navigationLinks } from './navigation/navigation-links';
import { NAVIGATION_LINK_TOKEN } from './navigation/navigation-links.token';
import { PageLoadingIndicatorComponent } from '@muziehdesign/components';

@NgModule({
    declarations: [AppComponent, NavigationComponent],
    imports: [BrowserModule, AppRoutingModule, ExamplesModule, SharedModule, CommonModule, NgbModule, NoopAnimationsModule, PageLoadingIndicatorComponent],
    providers: [
        CustomErrorHandler,
        { provide: NAVIGATION_LINK_TOKEN, useValue: navigationLinks }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
