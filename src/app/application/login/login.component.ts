import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {noop} from 'rxjs';
import {User} from '../../shared/user.model';
import {Store} from '@ngrx/store';
import {State} from '../../reducers';
import {login} from '../../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  bgClass: string;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private store: Store<State>) {

    !this.bgClass ? this.bgClass = `bgLogin_${Math.floor(Math.random() * 5) + 1}` : noop();

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm.value) {
      const userToLogin: User = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value
      };

      this.store.dispatch(login({ user: userToLogin }));
      this.router.navigateByUrl('/dashboard').then(() => noop());
    }
  }

  onReset() {
    this.loginForm.reset();
  }

}
