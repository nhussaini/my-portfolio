import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Portfolio } from 'src/app/services/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  types: string[];
  portfolios: Portfolio[];
  private _selectedType = 'all'; // by default, it is all

  get selectedType() {
    return this._selectedType;
  }
  set selectedType(newValue: string) {
    if (newValue !== this._selectedType) {
      this._selectedType = newValue;
      this.loadPortfolios(this._selectedType);
    }
  }

  constructor(private portfolioSvc: PortfolioService) { }

  ngOnInit() {
    this.loadPortfolios(this._selectedType);
  }

  loadPortfolios(selectedType: string): void {
    this.portfolioSvc.get().subscribe(data => {
      this.types = data.map(p => p.type).filter((value, index, self) => self.indexOf(value) === index);
      this.portfolios = data.filter(p => p.type === selectedType || selectedType === 'all');
    });
  }

}
