import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
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
