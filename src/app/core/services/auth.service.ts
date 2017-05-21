import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { HttpService } from './http';
import { AppAllState } from '../../interfaces';
import { Store } from '@ngrx/store';
import { AuthActions } from '../actions/auth-actions';

import {
  SignInData,

  UserType,
  UserData,
  AuthData,

  TokenOptions
} from '../models/models';

@Injectable()
export class AuthService {

  /**
   * Creates an instance of AuthService.
   * @param {HttpService} http
   * @param {AuthActions} actions
   * @param {Store<AppAllState>} store
   *
   * @memberof AuthService
   */
  constructor(
    private http: HttpService,
    private actions: AuthActions,
    private store: Store<AppAllState>
  ) {

  }

  /**
   *
   *
   * @param {SignInData} data
   * @returns {Observable<any>}
   *
   * @memberof AuthService
   */
  login(data: SignInData): Observable<any> {
    return this.http.signIn(data)
    .map((res: Response) => {
      let user_data = res.json();
      if (!user_data.error) {
        this.store.dispatch(this.actions.loginSuccess());
      } else {
        this.http.loading.next({
          loading: false,
          hasError: true,
          hasMsg: 'Please enter valid Credentials'
        });
      }
      return user_data;
    });
    // catch should be handled here with the http observable
    // so that only the inner obs dies and not the effect Observable
    // otherwise no further login requests will be fired
    // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
  }


  /**
   *
   *
   * @returns {Observable<any>}
   *
   * @memberof AuthService
   */
  authorized(): Observable<any> {
    return this.http
      .validateToken()
      .map((res: Response) => res.json());
    // catch should be handled here with the http observable
    // so that only the inner obs dies and not the effect Observable
    // otherwise no further login requests will be fired
    // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
  }

  /**
   *
   *
   * @returns
   *
   * @memberof AuthService
   */
  logout() {
    return this.http.signOut()
      .map((res: Response) => {
        // Setting token after login
        // this.http.clearAuth();
        this.store.dispatch(this.actions.logoutSuccess());
        return res.json();
      });
  }

  /**
   *
   *
   * @private
   * @param {any} user_data
   *
   * @memberof AuthService
   */
  private setTokenInLocalStorage(user_data): void {
    const jsonData = JSON.stringify(user_data);
    localStorage.setItem('user', jsonData);
  }
}
