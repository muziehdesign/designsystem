import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { CommonModule, EnumDisplayPipe, SpinnerComponent } from 'kitchensink/common';
import { PageProgressBarComponent } from './page-progress-bar/page-progress-bar.component';
import { PageLoadingIndicatorComponent } from './page-loading-indicator/page-loading-indicator.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';

@NgModule({
    declarations: [PageProgressBarComponent, PageLoadingIndicatorComponent, SvgIconComponent],
    exports: [PageProgressBarComponent, SvgIconComponent, SpinnerComponent, EnumDisplayPipe],
    imports: [CommonModule, CommonModule, AngularCommonModule],
})
export class SharedModule {}
