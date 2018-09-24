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
  SectionList,
  ToastAndroid,
  PermissionsAndroid
} from 'react-native';

import I18n from '../../locales/I18n';
import Permissions from 'react-native-permissions';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import moment from 'moment';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { getCountryCode } from '../../api/Search';
const arrColor = ['#EEA833', '#5ADDC1', '#5085C7', '#BE0B1C', '#C56728', '#E62B6F'];
import { Search } from '../../api/Search';
import { randomLocation } from '../../api/MapAPI';
import { LocationModule } from '../../libs/Modul';
import { checkInList } from '../../components/CheckInList';
import { getData } from '../../asset/data/mobileNumberfinder';

const { width, height } = Dimensions.get('window');
class Item extends Component {
  render() {
    return null;
  }
}
@inject('store')
@observer
export default class SearchView extends Component {
  constructor(props) {
    super(props);
    this.lastCl = '';
    this.number = '';
  }
  componentWillMount() {
    this._retrieveData();
  }
  _storeData = async dt => {
    try {
      await AsyncStorage.setItem('data', JSON.stringify(dt));
    } catch (error) {
      // Error saving data
    }
  };
  _removeData = async () => {
    try {
      await AsyncStorage.removeItem('data');
    } catch (error) {
      // Error saving data
    }
  };
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('data');

      if (value != null) {
        this.props.store.changeArrHistory(JSON.parse(value));
      }
    } catch (error) {}
  };
  rdColor = () => {
    while (true) {
      this.cl = arrColor[Math.floor(Math.random() * 6)];
      if (this.cl != this.lastCl) {
        this.lastCl = this.cl;
        break;
      }
    }

    return this.cl;
  };

  render() {
    // randomLocation(-33.8670522, 151.1957362);
    // alert(moment(Date.now()).format('HH:mm'));
    // Search('VN', '01694744534').then(val => {
    //   console.log(val);
    // });

    const data = JSON.stringify(this.props.store.arrSearchHistory);
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
          <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>{I18n.t('numberChecker')}</Text>
        </View>
        <View style={{ alignItems: 'center', width: width - 40, flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              height: 60,
              width: width - 40,
              borderRadius: 5,
              backgroundColor: '#FFF',
              shadowColor: '#000000',
              shadowOffset: {
                width: 3,
                height: 10
              },
              shadowRadius: 5,
              shadowOpacity: 0.4,
              elevation: 5,
              alignItems: 'center'
            }}
          >
            <TouchableOpacity>
              <Image
                source={require('../../asset/ic_earth.png')}
                style={{
                  height: 25,
                  width: 25,
                  marginLeft: 15,
                  marginRight: 5
                }}
              />
            </TouchableOpacity>
            <TextInput
              placeholder={'Enter number phone here'}
              placeholderTextColor={'#ABABAB'}
              autoFocus={true}
              keyboardType={'numeric'}
              onChangeText={val => {
                this.number = val;
              }}
              underlineColorAndroid="transparent"
              style={{
                flex: 1,
                marginRight: 10,
                fontSize: 16,
                color: '#000'
              }}
            />
          </View>
          <View style={{ height: 60, flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => {
                if (this.number == '') {
                  ToastAndroid.show('Số điện thoại không được để trống', ToastAndroid.SHORT);
                } else {
                  Search(this.props.store.countryCode, this.number)
                    .then(val => {
                      alert(JSON.stringify(val));
                      this.props.store.addToArrSearchHistory({
                        title: moment(Date.now()).format('DD/MM/YYYY'),
                        data: [{ ...val, time: moment(Date.now()).format('HH:mm') }]
                      });
                      this._storeData(this.props.store.arrSearchHistory);
                      this.props.navigation.navigate('SearchInforScreen', { val: val, rootNumber: this.number });
                    })
                    .catch(() => {
                      ToastAndroid.show("Can't get location of this number!", ToastAndroid.SHORT);
                    });
                }
              }}
              style={{
                marginTop: 10,
                flexDirection: 'row',
                height: 50,
                width: 140,
                borderRadius: 5,
                backgroundColor: '#D4001B',
                shadowColor: '#000000',
                shadowOffset: {
                  width: 3,
                  height: 10
                },
                shadowRadius: 5,
                shadowOpacity: 0.4,
                elevation: 5,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 14,
                  fontWeight: 'bold'
                }}
              >
                {I18n.t('find')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('CallLogScreen');
              }}
              style={{
                marginTop: 10,
                flexDirection: 'row',
                height: 50,
                width: 140,
                marginLeft: 5,
                borderRadius: 5,
                backgroundColor: '#D4001B',
                shadowColor: '#000000',
                shadowOffset: {
                  width: 3,
                  height: 10
                },
                shadowRadius: 5,
                shadowOpacity: 0.4,
                elevation: 5,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 14,
                  fontWeight: 'bold'
                }}
              >
                {I18n.t('choose')}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 35,
              width: width - 40,
              alignItems: 'flex-end',
              flexDirection: 'row',
              marginTop: 5
            }}
          >
            <View style={{ flex: 1 }}>
              <TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{I18n.t('history')}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <TouchableOpacity
                onPress={() => {
                  this._removeData();
                  this.props.store.changeArrHistory([]);
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{I18n.t('delete')}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 1,
              width: width - 40,
              flexDirection: 'row'
            }}
          >
            <View style={{ flex: 1 }}>
              <View style={{ width: 20, height: 1, backgroundColor: '#BA4040' }} />
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <View style={{ width: 20, height: 1, backgroundColor: '#BA4040' }} />
            </View>
          </View>
          <SectionList
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index, section }) => (
              <View
                style={{
                  flexDirection: 'row',
                  height: 60,
                  width: width - 40,
                  borderRadius: 5,
                  backgroundColor: '#FFF',
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 3,
                    height: 10
                  },
                  shadowRadius: 5,
                  shadowOpacity: 0.4,
                  elevation: 5,
                  alignItems: 'center',
                  marginBottom: 5
                }}
                key={index}
              >
                <View
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: '#959595',
                    marginLeft: 15,
                    marginRight: 15
                  }}
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 18, color: '#959595' }}>{item.number}</Text>
                  <Text style={{ fontSize: 16, color: '#959595' }}>{item.name}</Text>
                </View>
                <Text style={{ fontSize: 16, color: '#959595', marginRight: 13 }}>{item.time}</Text>
                <View style={{ height: 40, width: 2, backgroundColor: this.rdColor() }} />
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={{ fontWeight: 'bold', marginTop: 5, marginBottom: 5, color: '#858585' }}>{title}</Text>
            )}
            sections={JSON.parse(data)}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      </View>
    );
  }
}
