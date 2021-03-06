import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from './portfolio.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // in here, we inject HttpCLient
  constructor(private httpClient: HttpClient) { }

  get(): Observable< Portfolio[] > {
    return this.httpClient.get<Portfolio[]>(environment.apiUrl);
  }
}
