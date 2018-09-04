import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import StackNavigator from '../navigation/StackNavigator';
import store from '../stores/Store';
import Xa from '../screens/search_screen/SearchContainer';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    );
  }
}
