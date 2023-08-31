import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumDisplayPipe, MuziehComponentsModule, PhoneNumberPipe, DateDisplayPipe, ResultTableComponent, SubjectDisplayPipe, SpinnerComponent, SvgIconComponent, ButtonDirective } from 'muzieh-ngcomponents';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { EmbedDirective } from './embed.directive';
import { HighlightModule } from 'ngx-highlightjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';

@NgModule({
    declarations: [DemoContainerComponent, EmbedDirective],
    exports: [DemoContainerComponent, SvgIconComponent, SpinnerComponent, EnumDisplayPipe, DateDisplayPipe, SubjectDisplayPipe, ResultTableComponent, PhoneNumberPipe, ButtonDirective],
    imports: [MuziehComponentsModule, CommonModule, HighlightModule, NgbModule, MatTabsModule],
})
export class SharedModule {}
