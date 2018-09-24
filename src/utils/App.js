import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import StackNavigator from '../navigation/StackNavigator';
import store from '../stores/Store';

import { View, StatusBar } from 'react-native';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#D0011B" barStyle="light-content" />
          <StackNavigator />
        </View>
      </Provider>
    );
  }
}
