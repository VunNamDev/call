import { observable, action, values } from 'mobx';
import { Item } from 'native-base';

class Store {
  @observable
  countryCode = '';
  @action
  changeCountryCode = val => {
    this.countryCode = val;
  };
  @observable
  objFind = {};
  @action
  changeObjFind = obj => {
    this.objFind = obj;
  };
  @observable
  arrSearchHistory = [];
  @action
  changeArrHistory = arr => {
    this.arrSearchHistory = arr;
  };
  @action
  addToArrSearchHistory = item => {
    let check = true;
    this.arrSearchHistory.forEach((val, idx) => {
      if (item.title == val.title) {
        val.data.push(...item.data);
        check = false;
      }
    });
    if (check) {
      this.arrSearchHistory.push(item);
    }
  };
  @observable
  location = '';
  @action
  changeLocation = loc => {
    this.location = loc;
  };
  @observable
  arrContact = [];
  @action
  changeArrContact = arr => {
    this.arrContact = arr;
  };
  @action
  fakeLocation = (location, title, index, place) => {
    this.arrContact.map((values, i) => {
      if (values.title == title) {
        if (values.data[index].location == '') {
          this.arrContact[i].data[index].location = { place, ...location };
        }
      }
    });
  };
  @observable
  arrCallLog = [];
  @action
  changeArrCallLog = arr => {
    this.arrCallLog = arr;
  };
  @action
  fakeLocationCallLog = (location, title, index, place) => {
    this.arrCallLog.map((values, i) => {
      if (values.title == title) {
        if (values.data[index].location == '') {
          this.arrCallLog[i].data[index].location = { place, ...location };
        }
      }
    });
  };
}

const store = new Store();
export default store;
