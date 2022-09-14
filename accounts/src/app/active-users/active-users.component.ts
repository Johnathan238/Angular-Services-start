import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[] | undefined


  constructor(private activeUser: UsersService) { }

  ngOnInit(): void {
    this.users = this.activeUser.activeUsers
  }

  onSetToInactive(id: number) {
    this.activeUser.onSetToInactive(id)
  }
}
