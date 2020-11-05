import { Component, VERSION } from '@angular/core';

import {Todo} from "./todo";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = ' Project_Alpha ' + VERSION.major;
  todoValue:string;
  list: Todo[];

  ngOnInit()
  {
    this.list=[];
    this.todoValue="";
    window.alert("welcome to Rajarshis Todo List");
  }
  addItem()
  {
    if(this.todoValue!="")
    {
      const newItem: Todo ={
        id:Date.now(),
        value:this.todoValue,
        isDone:false

      };
      this.list.push(newItem);
    }
    this.todoValue="";
    
  }
  deleteItem(id:number)
  {
    this.list= this.list.filter(item => item.id!=id)
  }
}

