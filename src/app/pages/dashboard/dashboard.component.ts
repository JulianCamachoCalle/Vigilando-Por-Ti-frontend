import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { User } from '../../services/auth/user';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy{

  userLoginOn:boolean=false;
  userData?:User;

  constructor(private loginService:LoginService) {}

  ngOnDestroy(): void {
      this.loginService.currentUserData.unsubscribe();
      this.loginService.currentUserLoginOn.unsubscribe();
  }

  ngOnInit(): void {
      this.loginService.currentUserLoginOn.subscribe({
        next:(userLoginOn) => {
          this.userLoginOn=this.userLoginOn;
        }
      });

      this.loginService.currentUserData.subscribe({
        next:(userData) =>
          this.userData = userData,
      })
  }
}
