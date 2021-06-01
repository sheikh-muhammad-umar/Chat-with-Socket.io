import { Component, OnInit, AfterViewInit, Input, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit, AfterViewInit {

  @Input() sidenav: any;
  isLoggedIn: boolean = false;

  constructor(private router: Router, private loginService: LoginService, private change: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    // this.loginService.isloggedIn
    //   .subscribe(
    //     (data) => {
    //       console.log("header", data)
    //       this.isLoggedIn = data;
    //       this.change.detectChanges();
    //       console.log("header isLoggedIn", this.isLoggedIn);
    //     });
  }

  ngAfterViewInit(): void { }

  logout() {
    this.loginService.logOut();
    this.router.navigate['/'];
  }

  checkLogin() {
    return this.loginService.loggedIn();
  }

}
