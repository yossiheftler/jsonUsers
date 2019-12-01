import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public locationSvc:LocationService) { }

  ngOnInit() {
  }
  login(){
    this.locationSvc.CurrentLocation='homepage'
  }
  
}
