import React, { Component } from 'react';
import { Linking, Platform, Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { LocationModule } from './src/libs/Modul';
const { width, height } = Dimensions.get('window');
import Contacts from 'react-native-contacts';

var newPerson = {
  phoneNumbers: [
    {
      label: 'mobile',
      number: '01893747'
    }
  ]
};
export default class App extends Component {
  render() {
    LocationModule.addAsContactAutomatic('78888');
    // Linking.openURL('etc:016185756346').catch(err => console.error('An error occurred', err));
    return <View style={{ flex: 1 }} />;
  }
}
