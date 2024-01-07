import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  currentUser : Object = {};

  constructor(
    public authSrvice: AuthService,
    private actRoute: ActivatedRoute
  ){

    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authSrvice.getUserProfile(id).subscribe((res) => {
      this.currentUser = res.msg;
    });
  }

  ngOnInit(): void {
      
  }

}
