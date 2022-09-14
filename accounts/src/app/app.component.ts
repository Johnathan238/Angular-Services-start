import { Component } from '@angular/core';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: string[] | undefined

  constructor(private allUsers: UsersService){}

  ngOnInit(){
    this.users = this.allUsers.activeUsers
    console.log(this.allUsers);

  }
}
