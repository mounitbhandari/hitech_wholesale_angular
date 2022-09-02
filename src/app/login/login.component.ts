import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Md5} from "ts-md5";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  private loginableStudents: any[] = [];
  constructor(private fb: UntypedFormBuilder, private authService: AuthService, private router: Router) { }
  hide: boolean = true;
  ngOnInit(): void {
    this.authService.fetchStudents().then(students => {
      this.loginableStudents = students;
    });

    this.loginForm=new UntypedFormGroup({
      loginId : new UntypedFormControl('',[Validators.required,Validators.email]),
      loginPassword : new UntypedFormControl('',[Validators.required,Validators.minLength(6)])
    })
  }
  login(){
    if (!this.loginForm.valid) {
      // return;
    }

    // var result = this.loginableStudents.find(obj => {
    //   return (obj.userName === this.loginForm.value.loginId && obj.password === this.loginForm.value.loginPassword);
    // })
    // if(result){
    //   this.authService.loginTutorial(result);
    //   this.router.navigate(['/tutorial']).then(r => {});
    // }

    //  ********* Local Login *****************************

    // ****************************************************
    // console.log(this.loginForm.value);
    // converting password to MD5
    const md5 = new Md5();
    const passwordMd5 = md5.appendStr(this.loginForm.value.loginPassword).end();
    // const formPassword = form.value.password;
    this.authService.login({loginId: this.loginForm.value.loginId, loginPassword: passwordMd5}).subscribe(response => {
      if (response.status === true){
        if (this.authService.isOwner()){
          this.router.navigate(['/owner']).then(r => {});
        }
        if (this.authService.isDeveloper()){
          this.router.navigate(['/developer']).then(r => {});
        }
        if (this.authService.isStudent()){
          this.router.navigate(['/StudentUser']).then(r => {});
        }
      }
    });


  }

}
