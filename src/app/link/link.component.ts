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
      "color": "green",
      "img":"https://images.unsplash.com/photo-1587467512961-120760940315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNsaW5nJTIwYmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
     
      
    },
    {
      "pid": "101",
      "pname": "Shoes",
      "status": "InActive",
      "color": "red",
      "img":"https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 "
    },
    {
      "pid": "102",
      "pname": "Watch",
      "status": "Out of Stock",
      "color": "yellow",
      "img":"https://images.unsplash.com/photo-1511370235399-1802cae1d32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      "pid": "103",
      "pname": "Wrist Watch",
      "status": "Active",
      "color": "green",
      "img":"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" 
    },
    {
      "pid": "104",
      "pname": "Trolly",
      "status": "InActive",
      "color": "red",
      "img":"https://media.istockphoto.com/photos/packing-suitcase-for-travel-vacation-in-new-normal-top-view-picture-id1311253634?b=1&k=20&m=1311253634&s=170667a&w=0&h=jQKtsG95TDft5UXq9tZldkusWH-Ge6DAOqoyYGZZres="
    },
   
    {
      "pid": "106",
      "pname": "Wallet",
      "status": "Out of Stock",
      "color": "yellow",
      "img":"https://images.unsplash.com/photo-1614330316655-51dbca10f5f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbGV0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
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

