import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/allproduct.json";
@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(allprod as any).default;
}
