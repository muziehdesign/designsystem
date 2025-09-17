import { Component, OnInit } from '@angular/core';
import { MzButton } from '@muziehdesign/components';
import { AnchorLinkComponent } from "src/app/shared/anchor-link/anchor-link.component";

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
  standalone: true,
  imports: [MzButton, AnchorLinkComponent]
})
export class EmptyStateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
