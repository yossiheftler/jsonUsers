import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

 
  
  
  constructor() { }
  username

 
  CurrentLocation:string = 'login'

  changeLocation(newLocation:string){
   
    this.CurrentLocation = newLocation
  }
  
}
