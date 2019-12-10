import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: []
})
export class InputComponent implements OnInit {

  value = '';
  save;
  items;
  item;
  public values =[];

  constructor() { }

  ngOnInit() {
    this.values=JSON.parse(localStorage.getItem('save'));
      console.log("SDSDSD");
      console.log(JSON.parse(localStorage.getItem('save')));
  }


  onChange(event){
    this.value = event.target.value;
    this.values.push(this.value);
    this.value = '';
    event.target.value = '';
    localStorage.setItem('save',JSON.stringify(this.values));
  }

  add(){
    if(this.value != ""){
      this.values.push(this.value);
      this.value = '';
    }
    console.log(this.values);
    localStorage.setItem('save',JSON.stringify(this.values));
  }

  delete(u){
    console.log(u);
    this.values.splice(u,1);
    localStorage.setItem('save',JSON.stringify(this.values));
  }

  trackByFunction(index,item) { 
    console.log(item,index)
    if(!item) return null;
    return index;
  }

}
