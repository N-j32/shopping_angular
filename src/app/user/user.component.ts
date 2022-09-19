import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/product.json';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    
  }
  product:any = (productdetails as any).default;
}