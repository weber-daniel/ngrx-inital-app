import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {noop, Observable} from 'rxjs';
import {State} from '../../reducers';
import {select, Store} from '@ngrx/store';
import {logout} from '../../state/auth.actions';
import {User} from '../../shared/user.model';
import {getIsLoggedIn, getLoggedUser} from '../../state/auth.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isloggedIn$: Observable<boolean>;
  loggedUser$: Observable<User>;

  constructor(private router: Router, private store: Store<State>) { }

  ngOnInit() {
    this.isloggedIn$ = this.store.pipe(select(getIsLoggedIn));
    this.loggedUser$ = this.store.pipe(select(getLoggedUser));
  }

  onLogout() {
    this.store.dispatch(logout());
    console.log('User successfully logged out!');
    this.router.navigateByUrl('/login').then(() => noop());
  }

}
