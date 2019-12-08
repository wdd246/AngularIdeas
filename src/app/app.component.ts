import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ideas';
  value = '';
  item;
  public values =[];

  onChange(event){
    this.value = event.target.value;
    this.values.push(this.value);
    this.value = '';
    event.target.value = '';
  }

  add(){
    this.values.push(this.value);
    this.value = '';
  }

  delete(u){
    // const index = this.values.indexOf(u);
    console.log(u);
     this.values.splice(u,1);
  }

  trackByFunction(index,item) { 
    console.log(item,index)
    if(!item) return null;
    return index;
  }

}
