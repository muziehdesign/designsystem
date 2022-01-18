import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageProgressBarComponent } from './page-progress-bar/page-progress-bar.component';
import { PageLoadingIndicatorComponent } from './page-loading-indicator/page-loading-indicator.component';
import { EnumDisplayPipe, MuziehComponentsModule, ResultTableComponent, SpinnerComponent, SvgIconComponent } from 'muzieh-ngcomponents';

@NgModule({
    declarations: [PageProgressBarComponent, PageLoadingIndicatorComponent],
    exports: [PageProgressBarComponent, SvgIconComponent, SpinnerComponent, EnumDisplayPipe, ResultTableComponent],
    imports: [MuziehComponentsModule, CommonModule],
})
export class SharedModule {}
