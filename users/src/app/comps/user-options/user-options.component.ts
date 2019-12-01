import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent implements OnInit {

  constructor(public svc:UserService, 
    private loc:LocationService) { }

  ngOnInit() {
  }
  moveToPage(page:string){
    this.loc.location = page
  }

}
