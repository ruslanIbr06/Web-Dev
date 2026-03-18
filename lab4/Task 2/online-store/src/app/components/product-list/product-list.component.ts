import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <div class="product-grid">
      @for (p of products; track p.id) {
        <app-product-card [product]="p"></app-product-card>
      }
    </div>
  `,
  styles: [`
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 25px;
      padding: 20px;
      max-width: 1300px;
      margin: 0 auto;
    }
  `]
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      description: 'Титановый корпус, процессор A17 Pro и камера 5x.',
      price: 645000,
      rating: 4.9,
      images: ['products/iphone_1.jpg', 'products/iphone_2.jpg', 'products/iphone_3.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/'
    },
    {
      id: 2,
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая консоль с дисководом и 1 ТБ памяти.',
      price: 312000,
      rating: 5.0,
      images: ['products/ps5_1.jpg', 'products/ps5_2.jpg', 'products/ps5_3.jpg'],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/'
    },
    {
      id: 3,
      name: 'AirPods Pro 2 USB-C',
      description: 'Наушники с активным шумоподавлением и защитой от воды.',
      price: 109000,
      rating: 4.8,
      images: ['products/airpods_1.jpg', 'products/airpods_2.jpg', 'products/airpods_3.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-magsafe-usb-c-belyi-113677582/'
    },
    {
      id: 4,
      name: 'MacBook Air 13 M2',
      description: 'Тонкий ноутбук на базе мощного чипа M2.',
      price: 495000,
      rating: 4.9,
      images: ['products/macbook_1.jpg', 'products/macbook_2.jpg', 'products/macbook_3.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-8-gb-ssd-256-gb-macos-mlxw3-105933794/'
    },
    {
      id: 5,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Смартфон с ИИ Galaxy AI и стилусом S Pen.',
      price: 635000,
      rating: 4.7,
      images: ['products/s24_1.jpg', 'products/s24_2.jpg', 'products/s24_3.jpg'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116043556/'
    },
    {
      id: 6,
      name: 'Dyson V15 Detect',
      description: 'Беспроводной пылесос с лазерным лучом.',
      price: 367500,
      rating: 4.9,
      images: ['products/dyson_1.jpg', 'products/dyson_2.jpg', 'products/dyson_3.jpg'],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000'
    },
    {
      id: 7,
      name: 'Apple Watch Series 9',
      description: 'Смарт-часы с новым датчиком Double Tap.',
      price: 181000,
      rating: 4.9,
      images: ['products/watch_1.jpg', 'products/watch_2.jpg', 'products/watch_3.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000'
    },
    {
      id: 8,
      name: 'Nintendo Switch OLED',
      description: 'Портативная консоль с ярким OLED-экраном.',
      price: 185000,
      rating: 4.9,
      images: ['products/nintendo_1.jpg', 'products/nintendo_2.jpg', 'products/nintendo_3.jpg'],
      link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/?c=750000000'
    },
    {
      id: 9,
      name: 'Яндекс Станция Макс',
      description: 'Умная колонка с Алисой и Zigbee.',
      price: 185000,
      rating: 4.9,
      images: ['products/yandex_1.jpg', 'products/yandex_2.jpg', 'products/yandex_3.jpg'],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-maks-zigbee-bezhevyi-112523026/?c=750000000'
    },
    {
      id: 10,
      name: 'iPad Air 2024 M2',
      description: 'Планшет с мощностью ноутбука в тонком корпусе.',
      price: 495000,
      rating: 4.9,
      images: ['products/ipad_1.jpg', 'products/ipad_2.jpg', 'products/ipad_3.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/?c=750000000'
    }
  ];
}