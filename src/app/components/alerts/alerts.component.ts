import { Component, OnInit } from '@angular/core';
import { AlertComponent, DateDisplayPipe } from 'muzieh-ngcomponents';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  standalone: true,
  imports: [AlertComponent, DateDisplayPipe],
})
export class AlertsComponent implements OnInit {

  todayDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
