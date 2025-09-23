import { Component, input } from '@angular/core';

@Component({
  selector: 'mz-async',
  imports: [],
  templateUrl: './async.component.html',
  styleUrl: './async.component.scss'
})
export class MzAsync {
  isLoading = input(false);
  error = input<Error | undefined>(undefined);
}
