import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  categories = ['Смартфоны и планшеты', 'Товары для дома', 'Аксессуары', 'Игровые приставки'];
  selectedCategory: string | null = null;

  products: Product[] = [
    { id: 1, category: 'Смартфоны и планшеты', 
      name: 'iPhone 15', 
      description: 'Apple 128GB', 
      price: 380000, rating: 4.9, 
      images: ['products/iphone_1.jpg'], 
      link: 'https://kaspi.kz', 
      likes: 0 },

      { id: 2, 
      category: 'Игровые приставки', 
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая консоль с дисководом и 1 ТБ памяти.',
      price: 312000,
      rating: 5.0,
      images: ['products/ps5_1.jpg', 'products/ps5_2.jpg', 'products/ps5_3.jpg'],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/',
      likes: 0 },

      { id: 3, category: 'Аксессуары', 
       name: 'AirPods Pro 2 USB-C',
      description: 'Наушники с активным шумоподавлением и защитой от воды.',
      price: 109000,
      rating: 4.8,
      images: ['products/airpods_1.jpg', 'products/airpods_2.jpg', 'products/airpods_3.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-magsafe-usb-c-belyi-113677582/', 
      likes: 0 },

      { 
  id: 4, 
  category: 'Смартфоны и планшеты', 
  name: 'Xiaomi Redmi Pad SE 11" 8 ГБ/256 ГБ серый',
  description: '11-дюймовый дисплей с частотой 90 Гц, процессор Snapdragon 680 и четыре динамика с поддержкой Dolby Atmos.',
  price: 91440,
  rating: 5.0,
  images: ['products/redmi.jpg'],
  link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-seryi-140639712/?c=750000000', 
  likes: 0 
},

      { id: 5, category: 'Смартфоны и планшеты', 
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Смартфон с ИИ Galaxy AI и стилусом S Pen.',
      price: 635000,
      rating: 4.7,
      images: ['products/s24_1.jpg', 'products/s24_2.jpg', 'products/s24_3.jpg'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116043556/', 
      likes: 0 },

      { id: 6, category: 'Товары для дома', 
      name: 'Dyson V15 Detect',
      description: 'Беспроводной пылесос с лазерным лучом.',
      price: 367500,
      rating: 4.9,
      images: ['products/dyson_1.jpg', 'products/dyson_2.jpg', 'products/dyson_3.jpg'],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000', 
      likes: 0 },

      { id: 7, category: 'Аксессуары', 
      name: 'Apple Watch Series 9',
      description: 'Смарт-часы с новым датчиком Double Tap.',
      price: 181000,
      rating: 4.9,
      images: ['products/watch_1.jpg', 'products/watch_2.jpg', 'products/watch_3.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000', 
      likes: 0 },

      { id: 8, category: 'Игровые приставки', 
       name: 'Nintendo Switch OLED',
      description: 'Портативная консоль с ярким OLED-экраном.',
      price: 185000,
      rating: 4.9,
      images: ['products/nintendo_1.jpg', 'products/nintendo_2.jpg', 'products/nintendo_3.jpg'],
      link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/?c=750000000', 
      likes: 0 },

      { id: 9, category: 'Товары для дома', 
       name: 'Яндекс Станция Макс',
      description: 'Умная колонка с Алисой и Zigbee.',
      price: 185000,
      rating: 4.9,
      images: ['products/yandex_1.jpg', 'products/yandex_2.jpg', 'products/yandex_3.jpg'],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-maks-zigbee-bezhevyi-112523026/?c=750000000', 
      likes: 0 },

      { id: 10, category: 'Смартфоны и планшеты', 
      name: 'iPad Air 2024 M2',
      description: 'Планшет с мощностью ноутбука в тонком корпусе.',
      price: 495000,
      rating: 4.9,
      images: ['products/ipad_1.jpg', 'products/ipad_2.jpg', 'products/ipad_3.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/?c=750000000', 
      likes: 0 },
      {
        id: 11,
        category:'Смартфоны и планшеты',
        name:'iPhone 17 PRO 256GB',
        description:'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
        price:850000,
        rating:5.0,
        images:['products/ip17.jpg'],
        link:'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/?c=750000000',
        likes: 0
      },
      {
        id: 12,
        category:'Товары для дома',
        name:'Xiaomi Mi Smart Sterilization Humidifier',
        description:'Увлажнитель воздуха Xiaomi Mi Smart Sterilization Humidifier S MJJSQ03DY белый',
        price:25000,
        rating:4.6,
        images:['products/air.jpg'],
        link:'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-xiaomi-mi-smart-sterilization-humidifier-s-mjjsq03dy-belyi-101155587/?c=750000000',
        likes: 0
      },
      {
        id: 13,
        category:'Товары для дома',
        name:'Xiaomi Robot Vacuum X20+',
        description:'Робот-пылесос Xiaomi Robot Vacuum X20+ BHR8124EU белый',
        price:249500,
        rating:4.9,
        images:['products/vacuum.jpg'],
        link:'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x20-bhr8124eu-belyi-117857029/?c=750000000',
        likes: 0
      },
      {
        id: 14,
        category:'Товары для дома',
        name:'Двойной аэрогриль SPRX SPRX-8017D ',
        description:'Аэрогриль White Wave BW-8017D — идеальное решение для здоровой и быстрой еды!',
        price:34000,
        rating:4.8,
        images:['products/aero.jpg'],
        link:'https://kaspi.kz/shop/p/sprx-sprx-8017d-10-l-chernyi-144297982/?c=750000000',
        likes: 0
      },
      {
        id: 15,
        category:'Аксессуары',
        name:'WHOOP 5.0 PEAK + подписка 12 месяцев',
        description:'WHOOP 5.0 Peak — продвинутый фитнес-браслет для здоровья, восстановления и продуктивности. ',
        price:180000,
        rating:5.0,
        images:['products/whoop.jpg'],
        link:'https://kaspi.kz/shop/p/whoop-5-0-peak-chernyi-podpiska-12-mesjatsev-141065130/?c=750000000',
        likes: 0
      },
      {
        id: 16,
        category:'Аксессуары',
        name:'Стилус Apple Pencil Pro белый',
        description:'Apple Pencil Pro добавляет еще больше волшебных возможностей, чтобы помочь воплотить ваши идеи в жизнь.',
        price:70000,
        rating:4.4,
        images:['products/pencil.jpg'],
        link:'https://kaspi.kz/shop/p/stilus-apple-pencil-pro-belyi-119975356/?c=750000000',
        likes: 0
      },
      {
        id: 17,
        category:'Аксессуары',
        name:'Фитнес-браслет Xiaomi Smart Band 10',
        description:'Xiaomi Smart Band 10 — стильный и функциональный фитнес-браслет в черном цвете, который станет вашим надежным помощником в достижении спортивных целей и контроле здоровья.',
        price:27500,
        rating:5.0,
        images:['products/band.jpg'],
        link:'https://kaspi.kz/shop/p/xiaomi-smart-band-10-chernyi-141530632/?c=750000000',
        likes: 0
      },
      {
        id: 18,
        category:'Игровые приставки',
        name:'Sony Playstation 4 Pro 1Tb',
        description:'Играйте в новейшие хиты и эксклюзивы PlayStation в потрясающем 4K и транслируйте любимые сцены игр в невероятных подробностях на видеосервисах, поддерживающих 4K.',
        price:229990,
        rating:4.7,
        images:['products/ps4.jpg'],
        link:'https://kaspi.kz/shop/p/sony-playstation-4-pro-1tb-chernyi-gta-v-mk-11-call-of-duty-ufc-4-geimpad-103627528/?c=750000000',
        likes: 0
      },
      {
        id: 19,
        category:'Игровые приставки',
        name:'Steam Deck OLED 1 ТБ Valve Steam Deck',
        description:'Steam Deck OLED 1 ТБ — портативная игровая приставка, которая объединяет мощность, компактность и высокое качество графики. Идеальный выбор для геймеров, стремящихся к свободе и удобству в игре.',
        price:470000,
        rating:5.0,
        images:['products/deck.jpg'],
        link:'https://kaspi.kz/shop/p/steam-deck-oled-1-tb-valve-steam-deck-115152244/?c=750000000',
        likes: 0
      },
      {
        id: 20,
        category:'Игровые приставки',
        name:'Игровая приставка SEGA Mega Drive 300 Game',
        description:'Игровая приставка SEGA Mega Drive 300 Game — погружение в мир классических игр с 300 предустановленными играми. Эта портативная консоль сочетает в себе компактный дизайн и удобство использования, что делает её идеальным выбором для любителей ретро-гейминга.',
        price: 5000,
        rating:3.9,
        images:['products/sega.jpg'],
        link:'https://kaspi.kz/shop/p/sega-mega-drive-300-game-114863302/?c=750000000',
        likes: 0
      }
  ];

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }

  get filteredProducts() {
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  onProductRemove(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}