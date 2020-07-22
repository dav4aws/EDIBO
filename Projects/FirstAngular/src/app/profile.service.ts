import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  private loadData(){
    const data = localStorage.getItem('person');
    return data    
    ? JSON.parse(data)
    : { name: '' }
  }

  person = this.loadData();

}
