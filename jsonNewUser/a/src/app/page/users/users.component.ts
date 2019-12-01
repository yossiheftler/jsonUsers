import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[]
  constructor(public userSvc:UserService) { }

  ngOnInit() {

    this.userSvc.myData.subscribe(data=>{
      this.users=data
    })
  }

}
