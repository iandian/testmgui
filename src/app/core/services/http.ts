/**
 * Http Intercepter Service
 * TODO: Add Loader and Toasty Service currently using console log
 * for showing errors and response and request completion;
 */
import { Injectable } from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  Request,
  RequestMethod
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/filter';

import {
  SignInData,

  UserType,
  UserData,
  AuthData,

  TokenOptions
} from '../models/models';

@Injectable()
export class HttpService extends Http {
  public loading = new Subject();
  private atOptions: TokenOptions;
  private atCurrentAuthData: AuthData;
  private atCurrentUserData: UserData;


  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
  ) {
    super(backend, defaultOptions);
    this.init();
  }

  // Inital configuration
  init(options?: TokenOptions) {

    let defaultOptions: TokenOptions = {
      apiPath: null,
      apiBase: null,

      signInPath: 'auth/sign_in',
      signInRedirect: null,
      signInStoredUrlStorageKey: null,

      signOutPath: 'auth/sign_out',
      validateTokenPath: 'auth/validate_token',
      signOutFailedValidate: true,

      registerAccountPath: 'auth',
      deleteAccountPath: 'auth',
      registerAccountCallback: window.location.href,

      updatePasswordPath: 'auth',

      resetPasswordPath: 'auth/password',
      resetPasswordCallback: window.location.href,

      userTypes: null,

      oAuthBase: window.location.origin,
      oAuthPaths: {
        github: 'auth/github'
      },
      oAuthCallbackPath: 'oauth_callback',
      oAuthWindowType: 'newWindow',
      oAuthWindowOptions: null,

      globalOptions: {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    };

    this.atOptions = (<any>Object).assign(defaultOptions, options);

    this.tryLoadAuthData();
  }

  get currentUserData(): UserData {
    return this.atCurrentUserData;
  }

  get currentAuthData(): AuthData {
    return this.atCurrentAuthData;
  }


  /**
   *
   * Get Auth Data
   *
   */

  // Try to load auth data
  private tryLoadAuthData(): void {

    //  let userType = this.getUserTypeByName(localStorage.getItem('userType'));

    //  if (userType)
    //      this.atCurrentUserType = userType;

    this.getAuthDataFromStorage();

    //  if(this.activatedRoute)
    //      this.getAuthDataFromParams();

    if (this.atCurrentAuthData)
      this.validateToken();
  }

  // Validate token request
  validateToken(): Observable<Response> {
    let observ = this.get(this.atOptions.validateTokenPath);

    observ.subscribe(
      res => this.atCurrentUserData = res.json().data,
      error => {
        if (error.status === 401 && this.atOptions.signOutFailedValidate) {
          this.signOut();
        }
      });

    return observ;
  }

  // Sign in request and set storage
  signIn(signInData: SignInData): Observable<Response> {

    let body = JSON.stringify({
      nickname: signInData.nickname,
      password: signInData.password
    });

    let observ = this.post(this.atOptions.signInPath, body);

    observ.subscribe(res => this.atCurrentUserData = res.json().data, _error => null);

    return observ;
  }

  // Sign out request and delete storage
  signOut(): Observable<Response> {
    let observ = this.delete(this.atOptions.signOutPath);

    localStorage.removeItem('accessToken');
    localStorage.removeItem('client');
    localStorage.removeItem('expiry');
    localStorage.removeItem('tokenType');
    localStorage.removeItem('uid');

    this.atCurrentAuthData = null;
    this.atCurrentUserData = null;

    return observ;
  }

  // Try to get auth data from storage.
  private getAuthDataFromStorage(): void {

    let authData: AuthData = {
      accessToken: localStorage.getItem('accessToken'),
      client: localStorage.getItem('client'),
      expiry: localStorage.getItem('expiry'),
      tokenType: localStorage.getItem('tokenType'),
      uid: localStorage.getItem('uid')
    };

    if (this.checkAuthData(authData))
      this.atCurrentAuthData = authData;
  }

  // HTTP Wrappers

  /**
   * Performs a request with `get` http method.
   * @param url
   * @param options
   * @returns {Observable<>}
   */
  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.requestInterceptor();
    return this.request(this.getFullUrl(url), this.mergeRequestOptionsArgs({
      url: this.getFullUrl(url),
      method: RequestMethod.Get
    }, options))
      .catch(this.onCatch.bind(this))
      .do((res: Response) => {
        this.onSubscribeSuccess(res);
      }, (error: any) => {
        this.onSubscribeError(error);
      })
      .finally(() => {
        this.onFinally();
      });;
  }


  /**
   * Performs a request with `post` http method.
   * @param url
   * @param body
   * @param options
   * @returns {Observable<>}
   */
  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this.requestInterceptor();
    return this.request(this.getFullUrl(url), this.mergeRequestOptionsArgs({
      url: this.getFullUrl(url),
      method: RequestMethod.Post,
      body: body
    }, options))
      .catch(this.onCatch.bind(this))
      .do((res: Response) => {
        this.onSubscribeSuccess(res);
      }, (error: any) => {
        this.onSubscribeError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  /**
   * Performs a request with `put` http method.
   * @param url
   * @param body
   * @param options
   * @returns {Observable<>}
   */
  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this.requestInterceptor();
    return this.request(this.getFullUrl(url), this.mergeRequestOptionsArgs({
      url: this.getFullUrl(url),
      method: RequestMethod.Put,
      body: body
    }, options))
      .catch(this.onCatch.bind(this))
      .do((res: Response) => {
        this.onSubscribeSuccess(res);
      }, (error: any) => {
        this.onSubscribeError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  /**
   * Performs a request with `delete` http method.
   * @param url
   * @param options
   * @returns {Observable<>}
   */
  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.requestInterceptor();
    return this.request(this.getFullUrl(url), this.mergeRequestOptionsArgs({
      url: this.getFullUrl(url),
      method: RequestMethod.Delete
    }, options))
      .catch(this.onCatch.bind(this))
      .do((res: Response) => {
        this.onSubscribeSuccess(res);
      }, (error: any) => {
        this.onSubscribeError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  /**
   * Performs a request with `patch` http method.
   * @param url
   * @param body
   * @param options
   * @returns {Observable<>}
   */
  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this.requestInterceptor();
    return this.request(this.getFullUrl(url), this.mergeRequestOptionsArgs({
      url: this.getFullUrl(url),
      method: RequestMethod.Patch,
      body: body
    }, options))
      .catch(this.onCatch.bind(this))
      .do((res: Response) => {
        this.onSubscribeSuccess(res);
      }, (error: any) => {
        this.onSubscribeError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  /**
   * Performs a request with `head` http method.
   * @param path
   * @param options
   * @returns {Observable<>}
   */
  head(path: string, options?: RequestOptionsArgs): Observable<Response> {
    this.requestInterceptor();
    return this.request(this.getFullUrl(path), {
      method: RequestMethod.Head,
      url: this.getFullUrl(path),
    })
      .catch(this.onCatch.bind(this))
      .do((res: Response) => {
        this.onSubscribeSuccess(res);
      }, (error: any) => {
        this.onSubscribeError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  /**
   * Performs a request with `options` http method.
   * @param url
   * @param options
   * @returns {Observable<>}
   */
  options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.requestInterceptor();
    return this.request(this.getFullUrl(url), this.mergeRequestOptionsArgs({
      url: this.getFullUrl(url),
      method: RequestMethod.Options
    }, options))
      .catch(this.onCatch.bind(this))
      .do((res: Response) => {
        this.onSubscribeSuccess(res);
      }, (error: any) => {
        this.onSubscribeError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  /**
   * Performs any type of http request.
   * @param options
   * @returns {Observable<Response>}
   */
  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {

    let baseRequestOptions: RequestOptions;
    let baseHeaders: { [key: string]: string; } = this.atOptions.globalOptions.headers;

    // Merge auth headers to request if set
    if (this.atCurrentAuthData != null) {
      (<any>Object).assign(baseHeaders, {
        'access-token': this.atCurrentAuthData.accessToken,
        'client': this.atCurrentAuthData.client,
        'expiry': this.atCurrentAuthData.expiry,
        'token-type': this.atCurrentAuthData.tokenType,
        'uid': this.atCurrentAuthData.uid
      });
    }

    baseRequestOptions = new RequestOptions({
      headers: new Headers(baseHeaders)
    });

    // Merge standard and custom RequestOptions
    baseRequestOptions = baseRequestOptions.merge(options);

    let response = super.request(new Request(baseRequestOptions)).share();
    this.handleResponse(response);

    return response;
  }


  private mergeRequestOptionsArgs(options: RequestOptionsArgs, addOptions?: RequestOptionsArgs): RequestOptionsArgs {

    let returnOptions: RequestOptionsArgs = options;

    if (options)
      (<any>Object).assign(returnOptions, addOptions);

    return returnOptions;
  }

  // Check if response is complete and newer, then update storage
  private handleResponse(response: Observable<Response>): void {
    response.subscribe(res => {
      this.getAuthHeadersFromResponse(<any>res);
    }, error => {
      this.getAuthHeadersFromResponse(<any>error);
    });
  }



  // Parse Auth data from response
  private getAuthHeadersFromResponse(data: any): void {
    let headers = data.headers;

    let authData: AuthData = {
      accessToken: headers.get('access-token'),
      client: headers.get('client'),
      expiry: headers.get('expiry'),
      tokenType: headers.get('token-type'),
      uid: headers.get('uid')
    };

    this.setAuthData(authData);
  }


  /**
   *
   * Set Auth Data
   *
   */

  // Write auth data to storage
  private setAuthData(authData: AuthData): void {

    if (this.checkAuthData(authData)) {

      this.atCurrentAuthData = authData;

      localStorage.setItem('accessToken', authData.accessToken);
      localStorage.setItem('client', authData.client);
      localStorage.setItem('expiry', authData.expiry);
      localStorage.setItem('tokenType', authData.tokenType);
      localStorage.setItem('uid', authData.uid);

      // if (this.atCurrentUserType != null)
      // localStorage.setItem('userType', this.atCurrentUserType.name);

    }
  }

  /**
   *
   * Validate Auth Data
   *
   */

  // Check if auth data complete and if response token is newer
  private checkAuthData(authData: AuthData): boolean {

    if (
      authData.accessToken != null &&
      authData.client != null &&
      authData.expiry != null &&
      authData.tokenType != null &&
      authData.uid != null
    ) {
      if (this.atCurrentAuthData != null)
        return authData.expiry >= this.atCurrentAuthData.expiry;
      else
        return true;
    } else {
      return false;
    }
  }

  /**
   * Build API url.
   * @param url
   * @returns {string}
   */
  private getFullUrl(url: string): string {
    return "http://10.98.26.172:3000/" + url;
  }

  /**
   * Request interceptor.
   */
  private requestInterceptor(): void {
    console.log('Sending Request');
    // this.loaderService.showPreloader();
    this.loading.next({
      loading: true, hasError: false, hasMsg: ''
    });
  }

  /**
   * Response interceptor.
   */
  private responseInterceptor(): void {
    console.log('Request Complete');
    // this.loaderService.hidePreloader();
  }

  /**
   * Error handler.
   * @param error
   * @param caught
   * @returns {ErrorObservable}
   */
  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    console.log('Something went terrible wrong and error is', error);
    // this.loaderService.popError();
    return Observable.of(error);
  }

  /**
   * onSubscribeSuccess
   * @param res
   */
  private onSubscribeSuccess(res: Response): void {
    this.loading.next({
      loading: false, hasError: false, hasMsg: ''
    });
  }

  /**
   * onSubscribeError
   * @param error
   */
  private onSubscribeError(error: any): void {
    console.log('Something Went wrong while subscribing', error);
    // this.loaderService.popError();
    this.loading.next({
      loading: false, hasError: true, hasMsg: 'Something went wrong'
    });
  }

  /**
   * onFinally
   */
  private onFinally(): void {
    this.responseInterceptor();
  }
}
