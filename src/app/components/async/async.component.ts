import { Component } from '@angular/core';
import { MzAsync, MzAsyncError, MzAsyncLoading } from '@muziehdesign/components';
import { MzAsyncSuccess } from "projects/components/src/lib/async/async-success.directive";

@Component({
  selector: 'app-async',
  imports: [MzAsync, MzAsyncLoading, MzAsyncError, MzAsyncSuccess],
  templateUrl: './async.component.html',
  styleUrl: './async.component.scss'
})
export class AsyncComponent {

}
