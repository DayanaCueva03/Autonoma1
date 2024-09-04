import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UsersService } from './services/users/users.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private usersService: UsersService){}

  isLogged(): boolean{
    return this.usersService.getCurrentUser() != null;
  }

  onClickLogout(): void {
    this.usersService.logout();
  }


  menuOption: string = ''
  
  onOption(menuOption: string){
    this.menuOption = menuOption
  }
}
