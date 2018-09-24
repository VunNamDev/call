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
  PermissionsAndroid
} from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Contacts from 'react-native-contacts';
import Permissions from 'react-native-permissions';

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { List } from 'native-base';
import { Search, getCountryCode } from '../../api/Search';
import { randomLocation } from '../../api/MapAPI';
const { width, height } = Dimensions.get('window');
import moment from 'moment';
import CallLogs from 'react-native-call-log';
import I18n from '../../locales/I18n';

const arrAlpha = [];
@inject('store')
@observer
export default class CallLogView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentWillMount = async () => {
    // alert(PermissionsAndroid.PERMISSIONS.READ_CALL_LOG);
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CALL_LOG, {});
      if (true) {
        this.getCallLog();
      } else {
      }
    } catch (err) {
      console.warn(err);
    }
  };
  getCallLog = () => {
    let check = false;
    const obj = {};
    let arr = [];
    CallLogs.show(logs => {
      // parse logs into json format
      const parsedLogs = JSON.parse(logs);
      parsedLogs.map((values, index) => {
        values = { ...values, location: '' };
        if (!obj[moment(new Date(Number(values.callDate))).format('DD/MM/YYYY')]) {
          obj[moment(new Date(Number(values.callDate))).format('DD/MM/YYYY')] = [values];
        } else {
          console.log(obj[moment(new Date(Number(values.callDate))).format('DD/MM/YYYY')]);
          check = false;
          obj[moment(new Date(Number(values.callDate))).format('DD/MM/YYYY')].forEach((e, i) => {
            if (e.phoneNumber == values.phoneNumber) {
              check = true;
            }
          });
          if (!check) {
            obj[moment(new Date(Number(values.callDate))).format('DD/MM/YYYY')] = [
              values,
              ...obj[moment(new Date(Number(values.callDate))).format('DD/MM/YYYY')]
            ];
          }

          // console.log(typeof values.d);
        }
      });

      Object.keys(obj).forEach(function(key) {
        arr.push({
          title: key,
          data: obj[key].sort((a, b) => {
            if (a.callDate < b.callDate) return -1;
            return 1;
          })
        });
      });
      arr.sort((a, b) => {
        return a.title - b.title;
      });

      this.props.store.changeArrCallLog(arr);
    });
  };
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
          <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>{I18n.t('locationCheck')}</Text>
        </View>
        <View style={{ alignItems: 'center', width: width - 20, flex: 1 }}>
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
                source={require('../../asset/ic_find.png')}
                style={{
                  height: 25,
                  width: 25,
                  marginLeft: 15,
                  marginRight: 5
                }}
              />
            </TouchableOpacity>
            <TextInput
              ref={input => {
                this.textInput = input;
              }}
              placeholder={'Search'}
              placeholderTextColor={'#ABABAB'}
              autoFocus={true}
              onChangeText={val => {
                for (let i = 0; i < this.props.store.arrCallLog.length; i++) {
                  let c = false;
                  for (let j = 0; j < this.props.store.arrCallLog[i].data.length; j++) {
                    if (this.props.store.arrCallLog[i].data[j].phoneNumber.indexOf(val) >= 0) {
                      c = true;
                      try {
                        this.messagesSectionListRef.scrollToLocation({
                          itemIndex: j,
                          sectionIndex: i,
                          viewPosition: 0
                        });
                      } catch (e) {}

                      break;
                    }
                  }
                  if (c) {
                    break;
                  }
                }
              }}
              underlineColorAndroid="transparent"
              style={{
                flex: 1,
                marginRight: 10,
                fontSize: 16,
                color: '#000'
              }}
            />

            <TouchableOpacity
              onPress={() => {
                this.textInput.clear();
              }}
            >
              <Image
                source={require('../../asset/ic_clear.png')}
                style={{
                  height: 15,
                  width: 15,
                  marginRight: 15
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
            <SectionList
              style={{ marginTop: 20, flex: 1, marginLeft: 10 }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index, section }) => (
                <TouchableOpacity
                  onPress={() => {
                    //this.props.store.countryCode

                    Search(this.props.store.countryCode, item.phoneNumber)
                      .then(val => {
                        this.props.navigation.navigate('ContactInforScreen', {
                          val,
                          contactName: val.name != null ? val.name : val.number,
                          index: index,
                          title: section.title,
                          type: 'callLog',
                          rootNumber: item.phoneNumber
                        });
                      })
                      .catch(() => {
                        ToastAndroid.show("Can't get location of this number!", ToastAndroid.SHORT);
                      });
                  }}
                  style={{
                    flexDirection: 'row',
                    height: 60,
                    width: width - 40,
                    borderRadius: 5,
                    backgroundColor: null,

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
                      marginRight: 15,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Text style={{ fontSize: 18, color: '#959595' }} />
                  </View>

                  <Text style={{ fontSize: 18, color: '#959595' }}>
                    {item.cachedName != null ? item.cachedName : item.phoneNumber}
                  </Text>
                </TouchableOpacity>
              )}
              ref={ref => {
                this.messagesSectionListRef = ref;
              }}
              renderSectionHeader={({ section: { title } }) => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{ fontWeight: 'bold', marginTop: 5, marginBottom: 5, color: '#858585', marginRight: 10 }}
                  >
                    {title}
                  </Text>
                  <View style={{ height: 1, width: (width * 2) / 3, backgroundColor: '#858585' }} />
                </View>
              )}
              // data={data}
              sections={JSON.parse(JSON.stringify(this.props.store.arrCallLog))}
              keyExtractor={(item, index) => item + index}
            />
          </View>
        </View>
      </View>
    );
  }
}
