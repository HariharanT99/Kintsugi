import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

let counter = 0;

@Injectable({
  providedIn: 'root',
})

export class FoodService {
  id: number;

  constructor(private http: HttpClient) {
    counter++;
    this.id = counter;
  }
}
