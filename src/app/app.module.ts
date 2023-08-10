import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ExamplesModule } from './examples/examples.module';
import { OrderModule } from './order/order.module';
import { CommonModule } from '@angular/common';
import { MuziehComponentsModule } from 'muzieh-ngcomponents';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomErrorHandler } from './custom-error-handler';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';
import { navigationLinks } from './navigation/navigation-links';
import { NAVIGATION_LINK_TOKEN } from './navigation/navigation-links.token';

@NgModule({
    declarations: [AppComponent, NavigationComponent],
    imports: [BrowserModule, AppRoutingModule, ExamplesModule, SharedModule, CommonModule, OrderModule, NgbModule, HighlightModule, MuziehComponentsModule, NoopAnimationsModule],
    providers: [
        CustomErrorHandler,
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: <HighlightOptions>{
                lineNumbers: true,
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    css: () => import('highlight.js/lib/languages/css'),
                    xml: () => import('highlight.js/lib/languages/xml'),
                },
            },
        },
        { provide: NAVIGATION_LINK_TOKEN, useValue: navigationLinks }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
