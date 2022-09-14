import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[] | undefined

  constructor(private inActive: UsersService) { }


  ngOnInit(): void {
    this.users = this.inActive.inactiveUsers

  }

  onSetToActive(id: number) {
    this.inActive.onSetToActive(id)
  }
}
