import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {noop} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  bgClass: string;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {

    !this.bgClass ? this.bgClass = `bgLogin_${Math.floor(Math.random() * 5) + 1}` : noop();

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onLogin() {
    console.log(this.loginForm.value);
    this.router.navigateByUrl('/dashboard').then(() => noop());
  }

  onReset() {
    this.loginForm.reset();
  }

}
