https://github.com/michaelbromley/ngx-pagination    
https://github.com/cornflourblue/angular2-pagination-example   demo   http://jasonwatmore.com/post/2016/08/23/angular-2-pagination-example-with-logic-like-google

https://github.com/flauc/angular2-notifications   显示通知框
https://github.com/valor-software/ng2-table   Simple table extension with sorting, filtering, paging
https://github.com/Nolanus/ng2-page-scroll    Animated scrolling functionality written in pure angular2 https://nolanus.github.io/ng2-page-scroll/
https://github.com/ng-bootstrap/ng-bootstrap   

https://github.com/mariuszfoltak/angular2-datatable    DataTable - Simple table component with sorting and pagination for Angular2

https://github.com/chsakell/angular2-features    Angular CRUD ops, Modals, Animations, Pagination, DateTimePicker, Directives and much more




http://stackoverflow.com/questions/39749642/angular-2-roles-and-permissions
Based on the @Dave V response, you can implement your own "can" service which makes a little the code more readable. For example:

@Injectable()
export class UserCan {

  constructor (private _auth: AuthService)
  {

  }

  public canDoWhatever()
  {
    return (this._auth.roles.indexOf("Whatever") > -1);
  }

}
And in your Component s you can inject it:

export class YourComponent {
  private canDoWhatever: boolean;

  constructor(private _userCan: UserCan) {
    this.canDoWhatever = _userCan.canDoWhatever();
  }

}
And finally in your html:

<div *ngIf="canDoWhatever">


http://youknowriad.github.io/angular2-cookbooks/stateless-authentication.html
https://gist.github.com/btroncone/cebec10b89540f5501dd
http://stackoverflow.com/questions/35375530/how-do-i-add-a-json-web-token-to-each-header

https://jwt.io/introduction/

https://github.com/auth0/angular2-jwt.git
https://github.com/auth0-blog/angular-2-authentication-tutorial.git
https://github.com/auth0-blog/angular2-authentication-sample.git
https://github.com/cornflourblue/angular2-jwt-authentication-example.git
https://github.com/cornflourblue/angular2-registration-login-example-webpack.git
https://github.com/neroniaky/angular2-token.git
https://github.com/neroniaky/angular2-token-example.git
https://github.com/auth0-blog/angular2-tour-of-heroes.git
https://github.com/awslabs/aws-serverless-auth-reference-app.git
https://github.com/google/google-api-nodejs-client.git
https://github.com/hirezio/the-princess-guards.git


http://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
you can rename it to appReducer and write a new rootReducer delegating to it:

const appReducer = combineReducers({
  /* your app’s top-level reducers */
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}
Now we just need to teach the new rootReducer to return the initial state after USER_LOGOUT action. As we know, reducers are supposed to return the initial state when they are called with undefined as the first argument, no matter the action. Let’s use this fact to conditionally strip the accumulated state as we pass it to appReducer:

 const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}


https://anantasite.wordpress.com/2015/09/28/jwt-integration-with-devise-rails-and-angularjs/
https://medium.com/@goncalvesjoao/rails-devise-jwt-and-the-forgotten-warden-67cfcf8a0b73
https://www.sitepoint.com/introduction-to-using-jwt-in-rails/
https://gorails.com/forum/jwt-authentication-using-devise