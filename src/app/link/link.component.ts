import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  constructor() { }

  Products: any[] = [
    {
      "productname": "Bag"
      
    },
    {
      "productname": "Sling"
    },
    {
      "productname": "Trolly"
    },
    {
      "productname": "Bag pack"
    },
    {
      "productname": "Watch"
    },
    {
      "productname": "Wrist watch"
    },
    {
      "productname": "casual shoes"
    },
    {
      "productname": "Formal shoes"
    },
    {
      "productname": "Sport shoes"
    },
    {
      "productname": "Sun Glass"
    },
    {
      "productname": "Wallet"
    },
    {
      "productname": "Perfume"
    }

  ]
  //Event to hide Products
  isVisible: boolean = true;
  hide_products() {
    this.isVisible = !this.isVisible;
  }
  //*ngSwitch
  product = 'Bag'

  //property errorcolor for style binding using ternary operator
  errorcolor: string = 'red'

  //Array for style binding with ternary operator with ngSwitch

  ProductDetails = [
    {
      "pid": "100",
      "pname": "Sling",
      "status": "Active",
      "color": "green"
      
      
    },
    {
      "pid": "101",
      "pname": "Shoes",
      "status": "InActive",
      "color": "red"
    },
    {
      "pid": "102",
      "pname": "Watch",
      "status": "Out of Stock",
      "color": "yellow"
    },
    {
      "pid": "103",
      "pname": "Wrist Watch",
      "status": "Active",
      "color": "green"
    },
    {
      "pid": "104",
      "pname": "Trolly",
      "status": "InActive",
      "color": "red"
    },
    {
      "pid": "105",
      "pname": "Formal Shoes",
      "status": "Active",
      "color": "green"
    },
    {
      "pid": "106",
      "pname": "Wallet",
      "status": "Out of Stock",
      "color": "yellow"
    }
  ]
  getColor() {
    return 'blue';
  }
  //ngClass - created an instance for the class products
  prod:products=new products();
  //using an array we can access the properties and bind them to ngClass
  prod_array:string[]=['blue','shadow'];
  //date property for PIPE demo
  date_today:string | undefined;
  price:number | undefined;

  ngOnInit(): void {
    //initialize the date in the oninit function
    this.date_today=new Date().toDateString();
    this.price=1000;

  }
}
//ngClass
class products{
  blue:boolean=true;
  shadow:boolean=true;
  size:boolean=true;
}

