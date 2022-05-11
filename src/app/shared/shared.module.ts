import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumDisplayPipe, MuziehComponentsModule, PhoneNumberPipe, DateDisplayPipe, ResultTableComponent, SubjectDisplayPipe, SpinnerComponent, SvgIconComponent, MuziehDateTimeModule } from 'muzieh-ngcomponents';

@NgModule({
    exports: [SvgIconComponent, SpinnerComponent, EnumDisplayPipe, DateDisplayPipe, SubjectDisplayPipe, ResultTableComponent, PhoneNumberPipe, MuziehDateTimeModule],
    imports: [MuziehComponentsModule, CommonModule],
})
export class SharedModule {}
