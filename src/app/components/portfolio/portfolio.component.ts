import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  selectedType: 'all' | 'angular' | 'react' | 'vue' = 'all';

  constructor() { }

  ngOnInit() {
  }

}
