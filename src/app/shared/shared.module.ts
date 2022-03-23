import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent, EnumDisplayPipe, MuziehComponentsModule, PhoneNumberPipe, DateDisplayPipe, ResultTableComponent, SpinnerComponent, SvgIconComponent, DatetimeComponent } from 'muzieh-ngcomponents';

@NgModule({
    exports: [SvgIconComponent, SpinnerComponent, EnumDisplayPipe, DateDisplayPipe, ResultTableComponent, PhoneNumberPipe, DatetimeComponent],
    imports: [MuziehComponentsModule, CommonModule],
})
export class SharedModule {}
