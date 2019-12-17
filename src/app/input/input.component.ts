import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LocalStorageServiceService } from '../local-storage-service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: []
})
export class InputComponent implements OnInit,AfterViewInit {

  value = '';
  save;
  items;
  item;
  public values = [];
  date = new Date();

  constructor(private lsService:LocalStorageServiceService) {}

  ngAfterViewInit() {
    this.values=this.lsService.load();
  }

  ngOnInit(){

  }

  onChange(event){
    this.value = event.target.value;
    this.values.push(this.value);
    this.value = '';
    event.target.value = '';
    this.lsService.save(this.values);
  }

  add(){
    if(this.value != ''){
      this.values.push(this.value);
      this.value = '';
    }
    console.log(this.values);
    this.lsService.save(this.values);
  }

  delete(u){
    console.log(u);
    this.values.splice(u,1);
    this.lsService.save(this.values);
  }

  // trackByFunction(index,item) { 
  //   console.log(item,index)
  //   if(!item) return null;
  //   return index;
  // }

}
