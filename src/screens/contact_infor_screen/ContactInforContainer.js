import React, { Component } from 'react';
import ContactInforView from './ContactInforView';
export default class ContactInforScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ContactInforView {...this.props} />;
  }
}
