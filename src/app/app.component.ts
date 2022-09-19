import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Mynka';
  title='Mynka ';
  displayval="";
  getValue(val:string){
    this.displayval=val;
  }
  clickSave(){
    alert("Welcome to Mynka")
  }
}
