import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Portfolio } from 'src/app/services/portfolio.model';
import { trigger, transition, style, animate, animateChild, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@items', stagger(60, animateChild()))
      ])
    ]),
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0}),
        animate('0.350s cubic-bezier(.8, -0.6, 0.2, 1.5)',
        style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
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
