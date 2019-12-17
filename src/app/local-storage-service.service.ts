import { Injectable } from '@angular/core';
import { InputComponent } from './input/input.component';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  constructor() { }

  save(values:any[]){
    localStorage.setItem('save',JSON.stringify(values));
  }

  load() : any[]{
    return JSON.parse(localStorage.getItem('save'));
  }
}
