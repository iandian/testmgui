import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { AppAllState } from '../../../interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { getAuthStatus } from '../../../core/reducers/selectors';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  signInForm: FormGroup;
  loginSubs: Subscription;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppAllState>,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.redirectIfUserLoggedIn();
  }

  ngOnInit() {
    this.initForm();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/pages';
  }

  onSubmit() {
    const values = this.signInForm.value;
    const keys = Object.keys(values);

    if (this.signInForm.valid) {
      this.loginSubs = this.authService.login(values).subscribe(data => {
        const error = data.error;
        if (error) {
          keys.forEach(val => {
            this.pushErrorFor(val, error);
          });
        }
      });
    } else {
      keys.forEach(val => {
        const ctrl = this.signInForm.controls[val];
        if (!ctrl.valid) {
          this.pushErrorFor(val, null);
          ctrl.markAsTouched();
        };
      });
    }
  }

  private pushErrorFor(ctrl_name: string, msg: string) {
    this.signInForm.controls[ctrl_name].setErrors({'msg': msg});
  }

  initForm() {
    const nickname = '';
    const password = '';

    this.signInForm = this.fb.group({
      'nickname': [nickname, Validators.required],
      'password': [password, Validators.required]
    });
  }

  redirectIfUserLoggedIn() {
    this.store.select(getAuthStatus).subscribe(
      data => {
        if (data === true) { this.router.navigate([this.returnUrl]); }
      }
    );
  }

  ngOnDestroy() {
    if (this.loginSubs) { this.loginSubs.unsubscribe(); }
  }

}
