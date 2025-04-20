import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockCardComponent } from '../stock-card/stock-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, StockCardComponent], // ✅ This is key
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  stockSymbols = ['AAPL', 'GOOGL', 'TSLA']; // test this with dummy data
}
