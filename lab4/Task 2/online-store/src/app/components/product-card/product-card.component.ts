import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  

  selectedImageIndex = signal(0);

  changeImage(idx: number) {
    this.selectedImageIndex.set(idx);
  }

  share(platform: 'wa' | 'tg') {
    const text = encodeURIComponent(`Глянь, какой ${this.product.name} на Kaspi!`);
    const url = encodeURIComponent(this.product.link);
    const fullUrl = platform === 'wa' 
      ? `https://wa.me/?text=${text}%20${url}` 
      : `https://t.me/share/url?url=${url}&text=${text}`;
    window.open(fullUrl, '_blank');
  }
}