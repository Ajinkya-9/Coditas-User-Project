import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
showdetails = false;
  constructor(private userService: UserService) { }
users: any = [];
p: Number = 1;
  ngOnInit() {
   this.getUserData();
  }


  onclicktoggle() {
this.showdetails = !this.showdetails;
  }

getUserData() {
this.userService.getdata().subscribe((data: any) => {
  console.log(data);
this.users = data;
});
}

sortbyAtoZ() {
  this.users.sort(function(a, b) {
    const x = a.login.toLowerCase();
    const y = b.login.toLowerCase();
    if (x < y) {return -1; }
    if (x > y) {return 1; }
    return 0;
});
}
sortbyZtoA() {
  this.users.sort(function(a, b) {
    const x = a.login.toLowerCase();
    const y = b.login.toLowerCase();
    if (x < y) {return 1; }
    if (x > y) {return -1; }
    return 0;
});
}


sortbyAsending() {
  this.users.sort(function(a, b) {return a.id - b.id; });
}

sortbyDesending() {
  this.users.sort(function(a, b) {return b.id - a.id; });
//  this.getUserData();
}

}
