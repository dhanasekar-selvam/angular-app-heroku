import { GrootService } from './../../service/groot.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private service: GrootService,
    private localst: LocalStorageService
  ) {

  }
  loginform() {

    this.loginForm = this.formBuilder.group({
      email: [null,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ]),
      ],
      password: [null,
        Validators.compose([
          Validators.required, Validators.minLength(6),
        ])
      ]
    })


  }
  submit() {
    var key = this.loginForm.value.email;
    if (!this.loginForm.valid) {
      this.toastr.error('Please Fill All Fields')
    } else {
      if (this.localst.retrieve(`${key}`) === null) {
        this.toastr.error('Invalid Email id/Password')

      }
      else if (this.localst.retrieve(`${key}`).password != this.loginForm.value.password) {
        this.toastr.error('Invalid Email id/Password')
      }
      else {
        this.toastr.success('Login Success')
        this.localst.store("log-on", true);
        this.router.navigate(["/home"]);
      }
    }
  }


  ngOnInit(): void {
    this.loginform();
  }

}
