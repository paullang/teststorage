import {Page} from 'ionic-framework/ionic';
import {Inject} from 'angular2/core';
import {UserData} from '../../providers/user-data'

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(@Inject(UserData) userData) {
    this.userData = userData;
    
    userData.getAccessToken().then((value) => {
      this.accessToken = value;
    }
  }
}
