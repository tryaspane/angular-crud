import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "../../components/product-list/product-list.component";

@Component({
    selector: 'app-products-page',
    standalone: true,
    templateUrl: './products-page.component.html',
    styleUrls: ['./products-page.component.css'],
    imports: [CommonModule, ProductListComponent]
})
export class ProductsPageComponent {

}
