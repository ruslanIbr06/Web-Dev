import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [ProductListComponent], 
  template: `
    <h1 style="text-align: center;">Kaspi Store</h1>
    <app-product-list></app-product-list>
  `
})
export class AppComponent {}