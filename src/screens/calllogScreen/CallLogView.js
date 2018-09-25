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
import styles from './styles';
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
      <View style={styles.container}>
        <View style={styles.positionView} />
        <View style={styles.inforView}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={styles.btnBack}
          >
            <Image source={require('../../asset/ic_back.png')} style={styles.imgBack} />
          </TouchableOpacity>
          <Text style={styles.title}>{I18n.t('locationChecker')}</Text>
        </View>
        <View style={styles.mainView}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Image source={require('../../asset/ic_find.png')} style={styles.imgFind} />
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
              style={styles.textInput}
            />

            <TouchableOpacity
              onPress={() => {
                this.textInput.clear();
              }}
            >
              <Image source={require('../../asset/ic_clear.png')} style={styles.imgClear} />
            </TouchableOpacity>
          </View>
          <View style={styles.sectionView}>
            <SectionList
              style={styles.sectionList}
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
                  style={styles.personView}
                  key={index}
                >
                  <View style={styles.avatar}>
                    <Text style={styles.text} />
                  </View>

                  <Text style={styles.text}>{item.cachedName != null ? item.cachedName : item.phoneNumber}</Text>
                </TouchableOpacity>
              )}
              ref={ref => {
                this.messagesSectionListRef = ref;
              }}
              renderSectionHeader={({ section: { title } }) => (
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>
                    {title == moment(new Date(Date.now())).format('DD/MM/YYYY') ? 'Today' : title}
                  </Text>
                  <View style={styles.line} />
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
