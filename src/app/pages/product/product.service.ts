import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductListReadDto } from './product-list-read.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/menu/';

  constructor(private http: HttpClient) {}

  getProducts(category: string): Observable<ProductListReadDto[]> {
    return this.http.get<ProductListReadDto[]>(`${this.apiUrl}${category}`);
  }
}
