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
import { randomLocation, getPlaceName } from '../../api/MapAPI';
import { values } from 'mobx';
import { LocationModule } from '../../libs/Modul';
import { checkInList } from '../../components/CheckInList';
import { getCountryCode } from '../../api/Search';
import I18n from '../../locales/I18n';

const { width, height } = Dimensions.get('window');
@inject('store')
@observer
export default class ContactInforView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }
  componentWillMount() {
    this.obj = this.props.navigation.state.params.val;
    // this.contactName = this.props.navigation.state.params.contactName;
    // alert(JSON.stringify(this.contactName));
    const rootNumber = this.props.navigation.state.params.rootNumber;
    const res = checkInList(rootNumber);
    if (res != null) {
      this.props.store.changeLocation({ lat: res.lat, lng: res.lng });
    }
    randomLocation(this.props.store.location).then(val => {
      const json = {
        lat: val.lat,
        lng: val.lng
      };
      LocationModule.getPlaceName(
        JSON.stringify(json),
        res => {
          if (this.props.navigation.state.params.type != null) {
            // alert(JSON.stringify(res));
            this.props.store.fakeLocationCallLog(
              val,
              this.props.navigation.state.params.title,
              this.props.navigation.state.params.index,
              res
            );
            this.props.store.arrCallLog.map((values, i) => {
              if (values.title == this.props.navigation.state.params.title) {
                this.setState({
                  location: values.data[this.props.navigation.state.params.index].location.place
                });
              }
            });
          } else {
            getCountryCode().then(val => {
              this.props.store.changeCountryCode(val.countryCode + '');
              this.props.store.changeLocation({ lat: val.lat, lng: val.lon });
            });
            this.props.store.fakeLocation(
              val,
              this.props.navigation.state.params.title,
              this.props.navigation.state.params.index,
              res
            );
            this.props.store.arrContact.map((values, i) => {
              if (values.title == this.props.navigation.state.params.title) {
                this.setState({
                  location: values.data[this.props.navigation.state.params.index].location.place
                });
              }
            });
          }
        },
        err => {
          console.log(err);
        }
      );
    });
  }
  render() {
    // alert(JSON.stringify(this.props.navigation.state.params.val));

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
          <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>{I18n.t('locationChecker')}</Text>
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
            elevation: 5
          }}
        >
          <Image
            source={require('../../asset/ic_location_point.png')}
            style={{
              height: 20,
              width: 20,
              marginLeft: 15,
              marginTop: 20,
              marginRight: 5
            }}
          />
          <View style={{ height: 80, flex: 1 }}>
            <Text style={{ color: '#A3A3A3', fontSize: 20, marginTop: 10 }}>{I18n.t('location')}</Text>
            <Text numberOfLines={1} style={{ color: '#6A6A6A', fontSize: 16, marginTop: 5 }}>
              {this.state.location}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (this.state.location == '') {
                ToastAndroid.show('Please wait to get location of this number!', ToastAndroid.SHORT);
              } else {
                let lat = '';
                let lng = '';
                let placeName = '';
                if (this.props.navigation.state.params.type != null) {
                  this.props.store.arrCallLog.map((values, i) => {
                    if (values.title == this.props.navigation.state.params.title) {
                      lat = values.data[this.props.navigation.state.params.index].location.lat;
                      lng = values.data[this.props.navigation.state.params.index].location.lng;
                      placeName = values.data[this.props.navigation.state.params.index].location.place;
                    }
                  });
                } else {
                  this.props.store.arrContact.map((values, i) => {
                    if (values.title == this.props.navigation.state.params.title) {
                      lat = values.data[this.props.navigation.state.params.index].location.lat;
                      lng = values.data[this.props.navigation.state.params.index].location.lng;
                      placeName = values.data[this.props.navigation.state.params.index].location.place;
                    }
                  });
                }

                this.props.navigation.navigate('MyMapScreen', {
                  lat,
                  lng,
                  placeName
                });
              }
            }}
            style={{
              height: 30,
              width: 60,
              backgroundColor: '#D0021B',
              marginLeft: 10,
              marginTop: 25,
              marginRight: 10,
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row'
            }}
          >
            <Text style={{ fontSize: 16, color: '#FFF' }}> {I18n.t('map')}</Text>
            <Image style={{ height: 10, width: 8 }} source={require('../../asset/ic_next.png')} />
          </TouchableOpacity>
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
              flexDirection: 'row',
              height: 80,
              width: width - 40,
              borderRadius: 5,
              backgroundColor: '#FFF',
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
            <Text style={{ color: '#6A6A6A', fontSize: 18 }}>
              {this.obj.name != null ? this.obj.name : this.obj.number}
            </Text>
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
            <Text style={{ fontSize: 18, color: '#B0B0B0', marginLeft: 20 }}>{I18n.t('number')}</Text>
            <Text style={{ fontSize: 16, color: '#605F5F', marginLeft: 20, marginTop: 5 }}>{this.obj.number}</Text>
          </View>
          <View style={{ height: 1, width: width - 110, backgroundColor: '#DADADA' }} />
          <View
            style={{
              height: 80,
              width: width - 70,
              borderRadius: 5,
              backgroundColor: '#FFF'
            }}
          >
            <Text style={{ fontSize: 18, color: '#B0B0B0', marginLeft: 20 }}>{I18n.t('network')}</Text>
            <Text style={{ fontSize: 16, color: '#605F5F', marginLeft: 20, marginTop: 5 }}>{this.obj.carrier}</Text>
          </View>
        </View>
      </View>
    );
  }
}
