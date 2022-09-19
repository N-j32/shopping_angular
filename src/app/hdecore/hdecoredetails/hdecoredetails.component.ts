import { Component, OnInit, Input } from '@angular/core';
import * as alldeals from "..//hdcore.json";
@Component({
  selector: 'app-hdecoredetails',
  templateUrl: './hdecoredetails.component.html',
  styleUrls: ['./hdecoredetails.component.css']
})
export class HdecoredetailsComponent implements OnInit {

  constructor() { }

 //Input Class Decorator
 @Input()product:any

 ngOnInit(): void {
 }
 all:any=(alldeals as any).default;
}