import { Component, OnInit } from '@angular/core';
import * as product from '../data/product.json';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    
  }
  product:any = (product as any).default;
}