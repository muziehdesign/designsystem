import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [CommonModule, NgbNavModule, RouterModule],
})
export class TabsComponent implements OnInit {

  links = [
    { title: 'One', fragment: 'one', link: 'child1' },
    { title: 'Two', fragment: 'two', link: '.' }
  ];
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
