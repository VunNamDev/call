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
import styles from './styles';

const { width, height } = Dimensions.get('window');
export default class MenuView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.positionView} />
        <View style={styles.inforView}>
          <Text style={styles.title}>{I18n.t('menu')}</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Image source={require('../../asset/ic_star.png')} style={styles.img} />
          <Text style={styles.text}>{I18n.t('rate')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { marginTop: 30 }]}>
          <Image source={require('../../asset/ic_email.png')} style={styles.img} />
          <Text style={styles.text}> {I18n.t('contactUs')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, { marginTop: 30 }]}>
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
