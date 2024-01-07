import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;


  constructor(
    public fb: FormBuilder ,
    public authService: AuthService,
    public router: Router

  ){
    this.signupForm = this.fb.group({
      username: [''],
      email: [''],
      name: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
      
  }

  registerUser() {
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      if (res.result) {
        this.signupForm.reset();
        this.router.navigate(['log-in']);
      }
    });
  }

}
