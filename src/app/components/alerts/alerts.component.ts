import { Component, OnInit } from '@angular/core';
import { MzAlert, DateDisplayPipe } from '@muziehdesign/components';

@Component({
    selector: 'app-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss'],
    imports: [MzAlert, DateDisplayPipe]
})
export class AlertsComponent implements OnInit {

  todayDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
