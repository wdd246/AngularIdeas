import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Ideas';
  value = '';
  save;
  items;
  item;
  public values =[];

  // ngOnInit() {

  //   this.save={
  //     items:this.values
  //   }
  //   localStorage.setItem('save',JSON.stringify(this.values));
  

  //   this.value=localStorage.getItem('save');
  // }

  onChange(event){
    this.value = event.target.value;
    this.values.push(this.value);
    this.value = '';
    event.target.value = '';
  }

  add(){
    if(this.value != ""){
      this.values.push(this.value);
      this.value = '';
    }
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
