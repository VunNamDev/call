import React, { Component } from 'react';
import SearchInforView from './SearchInforView';
export default class SearchInforScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SearchInforView {...this.props} />;
  }
}
