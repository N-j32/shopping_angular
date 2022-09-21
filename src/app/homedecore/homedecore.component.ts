import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/allproduct.json";
//import microoven service and class
import {Homedecore } from '../homedecore';
import { HomedecoreService } from '../homedecore.service';
@Component({
  selector: 'app-homedecore',
  templateUrl: './homedecore.component.html',
  styleUrls: ['./homedecore.component.css']
})
export class HomedecoreComponent implements OnInit {

  home: Homedecore[]=[];
  constructor(private homedecoreservice:HomedecoreService) { }
  ngOnInit(): void {
    const homeObservable= this.homedecoreservice.getHomedecoreDetails();
    homeObservable.subscribe((homeData: Homedecore[])=>{
      this.home=homeData;
    });
  }
  all:any=(allprod as any).default;
  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
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

 
