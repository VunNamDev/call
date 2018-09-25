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
import styles from './styles';

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
    Search('VN', '113')
      .then(val => {
        console.log(val);
      })
      .catch(ex => {
        console.log(ex);
      });

    const data = JSON.stringify(this.props.store.arrSearchHistory);
    return (
      <View style={styles.container}>
        <View style={styles.positionView} />
        <View style={styles.inforView}>
          <Text style={styles.title}>{I18n.t('numberChecker')}</Text>
        </View>
        <View style={styles.mainView}>
          <View style={styles.searchView}>
            <TouchableOpacity>
              <Image source={require('../../asset/ic_earth.png')} style={styles.imgEarth} />
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
              style={styles.textInput}
            />
          </View>
          <View style={styles.btnView}>
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
              style={styles.btn}
            >
              <Text style={styles.text}>{I18n.t('find')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('CallLogScreen');
              }}
              style={[styles.btn, { marginLeft: 5 }]}
            >
              <Text style={styles.text}>{I18n.t('choose')}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.titleView}>
            <View style={styles.wrap}>
              <TouchableOpacity>
                <Text style={styles.titleText}>{I18n.t('history')}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <TouchableOpacity
                onPress={() => {
                  this._removeData();
                  this.props.store.changeArrHistory([]);
                }}
              >
                <Text style={styles.titleText}>{I18n.t('delete')}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line}>
            <View style={styles.wrap}>
              <View style={styles.miniLine} />
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <View style={styles.miniLine} />
            </View>
          </View>
          <SectionList
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index, section }) => (
              <View style={styles.item} key={index}>
                <View style={styles.avatar} />
                <View style={styles.wrap}>
                  <Text style={styles.itemText}>{item.number}</Text>
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
                <Text style={[styles.itemText, { marginRight: 13 }]}>{item.time}</Text>
                <View style={{ height: 40, width: 2, backgroundColor: this.rdColor() }} />
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeaderText}>
                {title == moment(new Date(Date.now())).format('DD/MM/YYYY') ? 'Today' : title}
              </Text>
            )}
            sections={JSON.parse(data)}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      </View>
    );
  }
}
