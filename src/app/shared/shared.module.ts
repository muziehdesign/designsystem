import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent, EnumDisplayPipe, MuziehComponentsModule, PhoneNumberPipe, DateDisplayPipe, ResultTableComponent, SpinnerComponent, SvgIconComponent } from 'muzieh-ngcomponents';

@NgModule({
    exports: [SvgIconComponent, SpinnerComponent, EnumDisplayPipe, DateDisplayPipe, ResultTableComponent, PhoneNumberPipe, AlertComponent],
    imports: [MuziehComponentsModule, CommonModule],
})
export class SharedModule {}
