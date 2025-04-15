import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {
  @Input() symbol: string = '';
  price: string = '';
  loading: boolean = true;

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    if (this.symbol) {
      this.stockService.getStockPrice(this.symbol).subscribe({
        next: (data) => {
          this.price = data.price;
          this.loading = false;
        },
        error: (err) => {
          console.error(`Error fetching price for ${this.symbol}`, err);
          this.loading = false;
        }
      });
    }
  }
}
