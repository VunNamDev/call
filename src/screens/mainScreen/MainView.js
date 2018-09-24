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

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TabNavigator from '../../navigation/TabNavigator';
import { getCountryCode } from '../../api/Search';
import { getPlaceName } from '../../api/MapAPI';

const { width, height } = Dimensions.get('window');
@inject('store')
@observer
export default class MainView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    getCountryCode().then(val => {
      this.props.store.changeCountryCode(val.countryCode + '');
    });
  }
  render() {
    return <TabNavigator {...this.props} />;
  }
}
