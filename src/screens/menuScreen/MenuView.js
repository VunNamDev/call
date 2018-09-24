import {
  Dimensions,
  ImageBackground,
  FlatList,
  Text,
  View,
  Animated,
  Image,
  Easing,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Keyboard
} from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import I18n from '../../locales/I18n';

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

const { width, height } = Dimensions.get('window');
export default class MenuView extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FAFAFA', alignItems: 'center' }}>
        <View
          style={{
            position: 'absolute',
            width: 3 * width,
            height: 3 * width,
            borderRadius: 3 * width,
            left: -width,
            backgroundColor: '#D0011B',
            top: -(3 * width - 140)
          }}
        />
        <View style={{ height: 40, width: width, alignItems: 'center', marginTop: 50 }}>
          <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>{I18n.t('menu')}</Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            height: 80,
            width: width - 40,
            borderRadius: 5,
            backgroundColor: '#FFF',
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 5
            },
            shadowRadius: 5,
            shadowOpacity: 0.4,
            elevation: 5
          }}
        >
          <Image
            source={require('../../asset/ic_star.png')}
            style={{
              height: 35,
              width: 35,
              marginLeft: 15,
              marginRight: 30
            }}
          />
          <Text style={{ color: '#474747', fontSize: 20 }}>{I18n.t('rate')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 30,
            height: 80,
            width: width - 40,
            borderRadius: 5,
            backgroundColor: '#FFF',
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 5
            },
            shadowRadius: 5,
            shadowOpacity: 0.4,
            elevation: 5
          }}
        >
          <Image
            source={require('../../asset/ic_email.png')}
            style={{
              height: 35,
              width: 35,
              marginLeft: 15,
              marginRight: 30
            }}
          />
          <Text style={{ color: '#474747', fontSize: 20 }}> {I18n.t('contactUs')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 30,
            height: 80,
            width: width - 40,
            borderRadius: 5,
            backgroundColor: '#FFF',
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 5
            },
            shadowRadius: 5,
            shadowOpacity: 0.4,
            elevation: 5
          }}
        >
          <Image
            source={require('../../asset/ic_share.png')}
            style={{
              height: 35,
              width: 35,
              marginLeft: 15,
              marginRight: 30
            }}
          />
          <Text style={{ color: '#474747', fontSize: 20 }}>{I18n.t('shareApp')}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
