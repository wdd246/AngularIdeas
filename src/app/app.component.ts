import { Component,ViewChild, AfterViewInit } from '@angular/core';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  @ViewChild(InputComponent, {static: false}) input;

  title = 'Ideas';
  value = '';
  save;
  items;
  item;
  public values =[];

  ngAfterViewInit() {
    this.value = this.input.value;
    this.save = this.input.save;
    this.items= this.input.items;
    this.item=this.input.item;
    this.values=this.input.values;
  }
}
