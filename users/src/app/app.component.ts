import { Component } from '@angular/core';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users';

  constructor(public location:LocationService) {
      
  }

}
