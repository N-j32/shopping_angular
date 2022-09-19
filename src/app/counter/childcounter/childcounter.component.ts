import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-childcounter',
  templateUrl: './childcounter.component.html',
  styleUrls: ['./childcounter.component.css']
})
export class ChildcounterComponent implements OnInit {

   //counter property
   counterValue=1;
   countLessThenOne=true;
   
   @Output() countEmmitter =new EventEmitter(); 
 
   PostValue(){
     this.countEmmitter.emit(this.counterValue);
   }
 
   //increment and decrement 
 
   //Quantity -> 10
   decrement(){
     if(this.counterValue==1 )
     {
       this.countLessThenOne=false;
     }
     else{
       this.countLessThenOne=true;
       this.counterValue--;
     }
     this.PostValue();
   }
   
 
   increment(){
     this.counterValue++;
     this.countLessThenOne=true;
     this.PostValue();
   }
 
 
 
   constructor() { }
 
   ngOnInit(): void {
   }
 
 }
