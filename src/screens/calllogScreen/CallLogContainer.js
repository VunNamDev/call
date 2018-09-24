import React, { Component } from 'react';
import CallLogView from './CallLogView';
import { inject } from 'mobx-react';
import { getData } from '../../asset/data/mobileNumberfinder';
export default class CallLogScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <CallLogView {...this.props} />;
  }
}
