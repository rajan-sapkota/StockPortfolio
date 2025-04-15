import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockCardComponent } from '../stock-card/stock-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, StockCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  stockSymbols: string[] = ['AAPL', 'GOOGL', 'MSFT']; // You can add more symbols here
}
