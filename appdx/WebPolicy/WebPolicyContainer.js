import React, { Component } from 'react';
import WebPolicyView from './WebPolicyView';
import { inject } from 'mobx-react';
export default class WebPolicyScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <WebPolicyView {...this.props} />;
  }
}
