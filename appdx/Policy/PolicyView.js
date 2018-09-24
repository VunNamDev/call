import React, { Component } from 'react';
import { TouchableOpacity, Linking, Platform, Dimensions, StyleSheet, Text, View, Image } from 'react-native';
const { width, height } = Dimensions.get('window');

export default class PolicyScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('../app_logo.png')}
            style={{
              height: 150,
              width: 150
            }}
          />
        </View>
        <Text
          style={{ color: '#000', fontSize: 20, textAlign: 'center', marginBottom: 5, marginLeft: 20, marginRight: 20 }}
        >
          Please enable the features and permissions:
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 40,
            marginLeft: 20,
            marginRight: 20
          }}
        >
          Remind you about missed calls.
        </Text>
        <TouchableOpacity
          style={{
            width: 300,
            alignItems: 'center',
            backgroundColor: '#3487FF',
            borderRadius: 150,
            height: 55,
            justifyContent: 'center'
          }}
        >
          <Text style={{ fontSize: 22, color: '#FFF' }}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{ marginTop: 20, color: '#9B9B9B', fontSize: 16, marginBottom: 60, textAlign: 'center' }}
          >{`Privacy policy & Terms of service`}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
