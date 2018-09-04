import React, { Component } from 'react';
import MenuView from './MenuView';
export default class MenuScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MenuView {...this.props} />;
  }
}
