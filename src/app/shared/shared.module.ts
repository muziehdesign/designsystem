import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageProgressBarComponent } from './page-progress-bar/page-progress-bar.component';
import { PageLoadingIndicatorComponent } from './page-loading-indicator/page-loading-indicator.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { EnumDisplayPipe, MuziehComponentsModule, SpinnerComponent } from 'muzieh-ngcomponents';

@NgModule({
    declarations: [PageProgressBarComponent, PageLoadingIndicatorComponent, SvgIconComponent],
    exports: [PageProgressBarComponent, SvgIconComponent, SpinnerComponent, EnumDisplayPipe],
    imports: [MuziehComponentsModule, CommonModule],
})
export class SharedModule {}
