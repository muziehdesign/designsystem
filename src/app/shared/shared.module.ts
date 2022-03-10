import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumDisplayPipe, MuziehComponentsModule, ResultTableComponent, SpinnerComponent, SvgIconComponent, AlertComponent } from 'muzieh-ngcomponents';

@NgModule({
    exports: [SvgIconComponent, SpinnerComponent, EnumDisplayPipe, ResultTableComponent, AlertComponent],
    imports: [MuziehComponentsModule, CommonModule],
})
export class SharedModule {}
