import React, { Component } from 'react';
import MyMapView from './MyMapView';
export default class MyMapScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MyMapView {...this.props} />;
  }
}
