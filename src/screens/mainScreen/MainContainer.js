import React, { Component } from 'react';
import MainView from './MainView';
import { inject } from 'mobx-react';
@inject('store')
export default class MainScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MainView {...this.props} />;
  }
}
