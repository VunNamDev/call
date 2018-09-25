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
  ToastAndroid
} from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Contacts from 'react-native-contacts';
import Permissions from 'react-native-permissions';
import I18n from '../../locales/I18n';

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { List, Toast } from 'native-base';
import { Search, getCountryCode } from '../../api/Search';
import { randomLocation } from '../../api/MapAPI';
import styles from './styles';
const { width, height } = Dimensions.get('window');

const arrAlpha = [];
@inject('store')
@observer
export default class LocationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentWillMount() {
    Permissions.request('contacts').then(response => {
      if (response == 'authorized' || response == 'allow') {
        getCountryCode().then(val => {
          this.props.store.changeCountryCode(val.countryCode + '');
          this.props.store.changeLocation({ lat: val.lat, lng: val.lon });

          this.getContact();
        });
      }
    });

    for (let i = 65; i < 91; i++) {
      arrAlpha.push(String.fromCharCode(i));
    }
  }
  getContact = () => {
    const obj = {};
    const arr = [];
    Contacts.getAll((err, contacts) => {
      if (err) throw err;
      contacts.map((item, index) => {
        // console.log(this.props.store.location);
        // randomLocation(this.props.store.location).then(val => {
        item = { ...item, location: '' };
        if (item.phoneNumbers.length != 0) {
          if (!obj[item.givenName[0].toUpperCase()]) {
            obj[item.givenName[0].toUpperCase()] = [item];
          } else {
            obj[item.givenName[0].toUpperCase()] = [item, ...obj[item.givenName[0].toUpperCase()]];
          }
        }
      });
      // });

      Object.keys(obj).forEach(function(key) {
        arr.push({
          title: key.toUpperCase(),
          data: obj[key].sort((a, b) => {
            if (a.givenName.toUpperCase() < b.givenName.toUpperCase()) return -1;
            return 1;
          })
        });
      });
      arr.sort((a, b) => {
        return a.title.charCodeAt() - b.title.charCodeAt();
      });

      this.props.store.changeArrContact(arr);
    });
  };
  scrollToSection = sectionId => {
    const section = this.messagesSectionListRef.find(item => item.section === sectionId);
    if (section) {
      this.messagesSectionListRef.getScrollResponder().scrollTo(scrollOffset(section.offset));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.positionView} />
        <View style={styles.inforView}>
          <Text style={styles.title}>{I18n.t('contacts')} </Text>
        </View>
        <View style={styles.main}>
          <View style={styles.searchView}>
            <TouchableOpacity>
              <Image source={require('../../asset/ic_find.png')} style={styles.imgFind} />
            </TouchableOpacity>
            <TextInput
              placeholder={'Search'}
              placeholderTextColor={'#ABABAB'}
              onChangeText={val => {
                if (val.length > 0) {
                  for (let i = 0; i < this.props.store.arrContact.length; i++)
                    if (this.props.store.arrContact[i].title == val[0].toUpperCase()) {
                      this.messagesSectionListRef.scrollToLocation({
                        itemIndex: -1,
                        sectionIndex: i,
                        viewPosition: 0
                      });
                      break;
                    }
                }
              }}
              underlineColorAndroid="transparent"
              style={styles.textInput}
            />

            <TouchableOpacity>
              <Image source={require('../../asset/ic_clear.png')} style={styles.btnFind} />
            </TouchableOpacity>
          </View>
          <View style={styles.sectionView}>
            <SectionList
              getItemLayout={(data, index) => {
                return { length: 44, offset: 44 * index, index: index };
              }}
              ref={ref => {
                this.messagesSectionListRef = ref;
              }}
              style={styles.sectionList}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index, section }) => (
                <TouchableOpacity
                  onPress={() => {
                    Search(this.props.store.countryCode, item.phoneNumbers[0].number)
                      .then(val => {
                        alert(JSON.stringify(val));
                        this.props.navigation.navigate('ContactInforScreen', {
                          val,
                          contactName: item.givenName,
                          index: index,
                          title: section.title,
                          rootNumber: item.phoneNumbers[0].number
                        });
                      })
                      .catch(err => {
                        ToastAndroid.show('Cant not get location of this number!', ToastAndroid.SHORT);
                      });
                  }}
                  style={styles.item}
                >
                  <View style={styles.avatar}>
                    <Text style={styles.text}>{item.givenName[0].toUpperCase()}</Text>
                  </View>
                  <Text style={styles.text}>
                    {item.givenName != null ? item.givenName : item.phoneNumbers[0].number}
                  </Text>
                </TouchableOpacity>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <View style={styles.sectionTitleView}>
                  <Text style={styles.sectionTitle}>{title}</Text>
                  <View style={styles.line} />
                </View>
              )}
              sections={JSON.parse(JSON.stringify(this.props.store.arrContact))}
              keyExtractor={(item, index) => index}
            />
            <View style={styles.rightView}>
              <FlatList
                style={{ flex: 1 }}
                data={arrAlpha}
                showsVerticalScrollIndicator={false}
                // style={{ marginTop: height - (height - height / 4 - 50) }}
                keyExtractor={(item, index) => {
                  return index + '';
                }}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.btnChar}
                      onPress={() => {
                        //alert(index);
                        //item la chu
                        for (let i = 0; i < this.props.store.arrContact.length; i++)
                          if (this.props.store.arrContact[i].title == item) {
                            this.messagesSectionListRef.scrollToLocation({
                              itemIndex: -1,
                              sectionIndex: i,
                              viewPosition: 0
                            });
                            break;
                          }

                        //     this.messagesSectionListRef.onScrollToIndexFailed({ itemIndex: -1, sectionIndex: this.idx });
                        // this.messagesSectionListRef.scrollToLocation({ itemIndex: -1, sectionIndex: index });
                      }}
                    >
                      <Text style={styles.txtChar}>{item}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
