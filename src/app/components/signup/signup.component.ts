import { GrootService } from './../../service/groot.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  signUpForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: GrootService,
    private toastr: ToastrService,
    private router: Router,
    private localst: LocalStorageService,

  ) { this.signupForm() }
  signupForm() {

    this.signUpForm = this.formBuilder.group({
      id: [Math.random().toString(36).substr(2, 9)],
      userName: [null,
        Validators.compose([
          Validators.required, Validators.minLength(3),
        ])
      ],
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
      ],
      password2: [null,
        Validators.compose([
          Validators.required, Validators.minLength(6),
        ])
      ],

    })


  }
  submit() {
    var form = this.signUpForm;
    var key = this.localst;
    if (!form.valid) {
      this.toastr.error('Please Fill All Fields')
    }
    else if (form.value.password != form.value.password2) {
      this.toastr.error('password and confirm password not matched')
    }
    else if (key.retrieve(form.value.email) != null) {
      this.toastr.error("Email already exist");
    }
    else {
      this.localst.store(form.value.email, form.value);
      this.toastr.success('Signup Success Redirect to Login')
      this.router.navigate(["/login"]);
      // console.log(this.localst.retrieve(form.value.email).userName);
    }
  }

  ngOnInit(): void {
  }

}
