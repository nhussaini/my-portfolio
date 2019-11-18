import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Portfolio } from 'src/app/services/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  portfolios: Portfolio[];
  selectedType: 'all' | 'angular' | 'react' | 'vue' = 'all'; // by default, it is all

  constructor(private portfolioSvc: PortfolioService) { }

  ngOnInit() {
    this.portfolioSvc.get().subscribe(data => {
      this.portfolios = data;
    });
  }

}
