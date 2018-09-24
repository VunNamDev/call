import React, { Component } from 'react';
import PolicyView from './PolicyView';
import { inject } from 'mobx-react';
export default class PolicyScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PolicyView {...this.props} />;
  }
}
