import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumDisplayPipe, MuziehComponentsModule, PhoneNumberPipe, DateDisplayPipe, ResultTableComponent, SubjectDisplayPipe, SpinnerComponent, SvgIconComponent, MuziehDateTimeModule, ButtonDirective } from 'muzieh-ngcomponents';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { EmbedDirective } from './embed.directive';
import { HighlightModule } from 'ngx-highlightjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [DemoContainerComponent, EmbedDirective],
    exports: [DemoContainerComponent, SvgIconComponent, SpinnerComponent, EnumDisplayPipe, DateDisplayPipe, SubjectDisplayPipe, ResultTableComponent, PhoneNumberPipe, MuziehDateTimeModule, ButtonDirective],
    imports: [MuziehComponentsModule, CommonModule, HighlightModule, NgbModule],
})
export class SharedModule {}
