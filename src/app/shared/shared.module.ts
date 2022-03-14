import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent, EnumDisplayPipe, MuziehComponentsModule, PhoneNumberPipe, ResultTableComponent, SpinnerComponent, SvgIconComponent } from 'muzieh-ngcomponents';

@NgModule({
    exports: [SvgIconComponent, SpinnerComponent, EnumDisplayPipe, ResultTableComponent, PhoneNumberPipe, AlertComponent],
    imports: [MuziehComponentsModule, CommonModule],
})
export class SharedModule {}
