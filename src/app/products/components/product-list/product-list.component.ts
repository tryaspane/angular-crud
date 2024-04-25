import { Component, OnInit } from '@angular/core';
import Product from '../../models/product';
import { EMPTY, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> = EMPTY

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.fetchProducts()
    this.products$ = this.productService.getProducts()
  }
}
