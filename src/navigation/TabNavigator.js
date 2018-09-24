import { createBottomTabNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
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
import LocationScreen from '../screens/locationScreen/LocationContainer';
import MenuScreen from '../screens/menuScreen/MenuContainer';
import SearchScreen from '../screens/searchScreen/SearchContainer';
export default TabNavigator(
  {
    SearchScreen: {
      screen: SearchScreen
    },
    LocationScreen: {
      screen: LocationScreen
    },
    MenuScreen: {
      screen: MenuScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ focused }) => {
        // const { routeName } = navigation.state;
        // let text;

        // switch (routeName) {
        //   case 'LocationScreen':
        //     text = 'Search';
        //     break;
        //   case 'MenuScreen':
        //     text = 'Location';
        //     break;
        //   case 'SearchScreen':
        //     text = 'Menu';
        //     break;
        // }
        return <Text />;
      },

      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let text;
        switch (routeName) {
          case 'SearchScreen':
            iconName = require('../asset/ic_find.png');
            text = 'Search';
            break;
          case 'LocationScreen':
            iconName = require('../asset/ic_location_point.png');
            text = 'Location';
            break;
          case 'MenuScreen':
            iconName = require('../asset/ic_menu.png');
            text = 'Menu';
            break;
        }

        if (focused)
          return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={iconName} style={{ height: 30, width: 30, tintColor: '#D0021B', marginTop: 5 }} />
              <Text style={{ color: '#D0021B' }}>{text}</Text>
            </View>
          );

        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={iconName} style={{ height: 30, width: 30, marginTop: 5, tintColor: '#A5A5A5' }} />
            <Text style={{ color: '#A5A5A5' }}>{text}</Text>
          </View>
        );
      }
    }),

    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      inactiveBackgroundColor: '#FFF',
      activeBackgroundColor: '#fff',
      // tintColor: 'red',
      // activeTintColor: 'red',
      indicatorStyle: {
        height: 10
      },

      style: {
        height: 60
      }
    },
    swipeEnable: true
  }
);
