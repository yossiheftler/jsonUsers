import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  name:string;
  password:string;
  constructor(public locationSvc:LocationService) { }

  ngOnInit() {
  
  }
 


}
