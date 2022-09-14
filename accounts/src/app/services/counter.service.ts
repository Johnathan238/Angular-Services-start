import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activetoInActive = 0
  inactiveToActive = 0

  incrementInactivetoActive(){
    const moreInactive = this.activetoInActive++
    console.log('Inactive to active ' + ' ' + moreInactive);
  }

  incrementActivetoInactive(){
    const moreActive = this.inactiveToActive++
    console.log('Active to Inactive' + ' ' + moreActive);

  }

  showNums(id: number){
    console.log(id);
  }

  constructor() { }
}
