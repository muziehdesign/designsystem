import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumDisplayPipe, MuziehComponentsModule, PhoneNumberPipe, DateDisplayPipe, ResultTableComponent, SpinnerComponent, SvgIconComponent, MuziehDateTimeModule } from 'muzieh-ngcomponents';

@NgModule({
    exports: [SvgIconComponent, SpinnerComponent, EnumDisplayPipe, DateDisplayPipe, ResultTableComponent, PhoneNumberPipe, MuziehDateTimeModule],
    imports: [MuziehComponentsModule, CommonModule],
})
export class SharedModule {}
