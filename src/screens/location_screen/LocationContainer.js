import React, { Component } from 'react';
import LocationView from './LocationView';
import { inject } from 'mobx-react';
export default class LocationScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <LocationView {...this.props} />;
  }
}
