import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumDisplayPipe, MuziehComponentsModule, ResultTableComponent, SpinnerComponent, SvgIconComponent } from 'muzieh-ngcomponents';

@NgModule({
    exports: [SvgIconComponent, SpinnerComponent, EnumDisplayPipe, ResultTableComponent],
    imports: [MuziehComponentsModule, CommonModule],
})
export class SharedModule {}
