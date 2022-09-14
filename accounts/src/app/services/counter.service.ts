import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  showNums(id: number){
    console.log(id);

  }

  constructor() { }
}
