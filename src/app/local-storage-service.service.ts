import { Injectable } from '@angular/core';
import { InputComponent } from './input/input.component';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  constructor() { }

  save(values){
    localStorage.setItem('save',JSON.stringify(values));
  }

  load(){
    return JSON.parse(localStorage.getItem('save'));
  }
}
