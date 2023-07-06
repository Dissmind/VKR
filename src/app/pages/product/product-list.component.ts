import { Component, OnInit } from '@angular/core'
import { ProductListReadDto } from './product-list-read.dto'
import { ProductService } from './product.service'
import { ActivatedRoute } from '@angular/router'





@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  category: string = ''
  classNameBlock = ''
  products: ProductListReadDto[] = []

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.classNameBlock = params['category']
    })
  }



  ngOnInit() {
    this.fetchProducts()
  }


  fetchProducts() {
    this.productService.getProducts(this.category)
      .subscribe(
        (products: ProductListReadDto[]) => {
          this.products = products
        },
        (error) => {
          console.log('An error occurred while fetching products:', error);
        }
      );
  }
}
