import {Injectable, Inject} from 'angular2/core';
import {Storage, SqlStorage} from 'ionic-framework/ionic';


@Injectable()
export class UserData {
  constructor() {
    this.storage = new Storage(SqlStorage);
    this.ACCESS_TOKEN = 'access_token';
  }
  
  getAccessToken() {
    return this.storage.get(this.ACCESS_TOKEN).then((value) => {
      
      if(value == null) {
        console.log('getAccessToken null, so pretend we prompted for login and got token from auth server')
        let newToken = Math.random().toString().replace('\.', '');
        this.storage.set(this.ACCESS_TOKEN, newToken);
        return newToken;
      }
      else {
        console.log('getAccessToken found value ' + value)
        return value;
      }
    });
  }
  
}