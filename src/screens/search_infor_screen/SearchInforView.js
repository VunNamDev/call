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
  Keyboard,
  ToastAndroid
} from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { randomLocation } from '../../api/MapAPI';
import { LocationModule } from '../../libs/Modul';
const { width, height } = Dimensions.get('window');
@inject('store')
export default class SearchInforView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: ''
    };
  }
  componentWillMount() {
    randomLocation(this.props.store.location).then(val => {
      this.lat = val.lat;
      this.lng = val.lng;
      const json = {
        lat: val.lat,
        lng: val.lng
      };
      LocationModule.getPlaceName(
        JSON.stringify(json),
        res => {
          this.setState({
            place: res
          });
        },
        err => {
          console.log(err);
        }
      );
    });
  }
  render() {
    const obj = this.props.navigation.state.params.val;
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
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{ position: 'absolute', left: 0, bottom: 15 }}
          >
            <Image
              source={require('../../asset/ic_back.png')}
              style={{
                height: 20,
                width: 20,
                marginLeft: 15,
                marginTop: 20,
                marginRight: 5
              }}
            />
          </TouchableOpacity>
          <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>NUMBER CHECKER</Text>
        </View>
        <View
          style={{
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
            elevation: 5,
            alignItems: 'center'
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              borderWidth: 1,
              borderColor: '#9A9A9A',
              marginRight: 20,
              marginLeft: 20
            }}
          />
          <Text style={{ color: '#6A6A6A', fontSize: 18 }}>{obj.number}</Text>
        </View>

        <View
          style={{
            marginTop: 30,
            height: 250,
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
            elevation: 5,
            alignItems: 'center'
          }}
        >
          <View
            style={{
              height: 80,
              width: width - 70,
              borderRadius: 5,
              backgroundColor: '#FFF',
              shadowColor: '#000000',

              justifyContent: 'center'
            }}
          >
            <Text style={{ fontSize: 18, color: '#B0B0B0', marginLeft: 20 }}>Name</Text>
            <Text style={{ fontSize: 16, color: '#605F5F', marginLeft: 20, marginTop: 5 }}>{obj.name}</Text>
          </View>
          <View style={{ height: 1, width: width - 110, backgroundColor: '#DADADA' }} />
          <View
            style={{
              flexDirection: 'row',
              height: 80,
              width: width - 40,
              borderRadius: 5,
              backgroundColor: '#FFF'
            }}
          >
            {/* <Image
              source={require('../../asset/ic_contacts.png')}
              style={{
                height: 20,
                width: 20,
                marginLeft: 15,
                marginTop: 20,
                marginRight: 5
              }}
            /> */}
            <View style={{ height: 80, flex: 1, marginLeft: 35 }}>
              <Text style={{ color: '#A3A3A3', fontSize: 20, marginTop: 10 }}>LOCATION</Text>
              <Text style={{ color: '#6A6A6A', fontSize: 16, marginTop: 5 }}>{this.state.place}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (this.state.place != '') {
                  this.props.navigation.navigate('MyMapScreen', {
                    lat: this.lat,
                    lng: this.lng,
                    placeName: this.state.place
                  });
                } else {
                  ToastAndroid.show('Please wait to get location of this number!', ToastAndroid.SHORT);
                }
              }}
              style={{
                height: 30,
                width: 60,
                backgroundColor: null,
                marginLeft: 10,
                marginTop: 25,
                marginRight: 10,
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row'
              }}
            >
              <Text style={{ fontSize: 16, color: '#D0021B' }}>MAP</Text>
              <Image
                style={{ height: 10, width: 8, tintColor: '#D0021B' }}
                source={require('../../asset/ic_next.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={{ height: 1, width: width - 110, backgroundColor: '#DADADA' }} />
          <View
            style={{
              height: 80,
              width: width - 70,
              borderRadius: 5,
              backgroundColor: '#FFF',

              justifyContent: 'center'
            }}
          >
            <Text style={{ fontSize: 18, color: '#B0B0B0', marginLeft: 20 }}>NETWORK</Text>
            <Text style={{ fontSize: 16, color: '#605F5F', marginLeft: 20, marginTop: 5 }}>{obj.carrier}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            LocationModule.addAsContactAutomatic(obj.number);
          }}
          style={{
            height: 40,
            width: 200,
            borderRadius: 5,
            backgroundColor: '#D0021B',
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 5
            },
            shadowRadius: 5,
            shadowOpacity: 0.4,
            elevation: 5,
            justifyContent: 'center',
            marginTop: 40,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Image
            source={require('../../asset/ic_contacts.png')}
            style={{
              height: 20,
              width: 20,
              marginRight: 10
            }}
          />
          <Text style={{ color: '#FFF', fontSize: 18 }}>Add to contact</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
