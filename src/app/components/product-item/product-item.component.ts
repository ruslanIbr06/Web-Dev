import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Output() remove = new EventEmitter<number>();

  onLike() {
  if (!this.product.isLiked) {
    this.product.likes++;
    this.product.isLiked = true;
  } else {
    this.product.likes--;
    this.product.isLiked = false;
  }
}

  onRemove() {
    this.remove.emit(this.product.id);
  }

  share(platform: 'wa' | 'tg') {
    const text = encodeURIComponent(`Посмотри на ${this.product.name}: ${this.product.link}`);
    const url = platform === 'wa' 
      ? `https://wa.me/?text=${text}` 
      : `https://t.me/share/url?url=${this.product.link}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}