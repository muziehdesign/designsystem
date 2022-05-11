import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumDisplayPipe, MuziehComponentsModule, PhoneNumberPipe, DateDisplayPipe, ResultTableComponent, SpinnerComponent, SvgIconComponent, MuziehDateTimeModule } from 'muzieh-ngcomponents';
import { SubjectDisplayPipe } from 'projects/components/src/lib/subject-display/subject-display.pipe';

@NgModule({
    exports: [SvgIconComponent, SpinnerComponent, EnumDisplayPipe, DateDisplayPipe, SubjectDisplayPipe, ResultTableComponent, PhoneNumberPipe, MuziehDateTimeModule],
    imports: [MuziehComponentsModule, CommonModule],
})
export class SharedModule {}
