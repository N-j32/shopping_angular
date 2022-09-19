import { Component, OnInit } from '@angular/core';
import * as perfume from "../data/perfume.json";
@Component({
  selector: 'app-perfume',
  templateUrl: './perfume.component.html',
  styleUrls: ['./perfume.component.css']
})
export class PerfumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//Fetch the data from refrigerator.json using the alias refrigerator in line nnumber 4
perfume:any=(perfume as any).default;

//Toggle effect to show and hide the pdescription and price
//Property for toggle effect
productDetail=false;
//Event to perform the toggle effect
showproductDetailsToggle()
{
  this.productDetail=!this.productDetail;
}
//function to toggle between the span content from + to - and vice versa
//and bind the function to [ngClass]
toggleContent(){
  var content='';
  if(this.productDetail){
    content='fa-solid fa-arrow-up';
  }
  else{
    content='fa-solid fa-arrow-down';
  }
  return content;
}
}
