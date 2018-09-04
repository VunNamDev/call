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

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { List, Toast } from 'native-base';
import { Search, getCountryCode } from '../../api/Search';
import { randomLocation } from '../../api/MapAPI';
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
          <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>CONTACTS</Text>
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
              style={{
                flex: 1,
                marginRight: 10,
                fontSize: 16,
                color: '#000'
              }}
            />

            <TouchableOpacity>
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
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <SectionList
              getItemLayout={(data, index) => {
                return { length: 44, offset: 44 * index, index: index };
              }}
              ref={ref => {
                this.messagesSectionListRef = ref;
              }}
              style={{ marginTop: 20, flex: 1, marginLeft: 10 }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index, section }) => (
                <TouchableOpacity
                  onPress={() => {
                    Search(this.props.store.countryCode, item.phoneNumbers[0].number)
                      .then(val => {
                        this.props.navigation.navigate('ContactInforScreen', {
                          val,
                          contactName: item.givenName,
                          index: index,
                          title: section.title
                        });
                      })
                      .catch(err => {
                        ToastAndroid.show('Cant not get location of this number!', ToastAndroid.SHORT);
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
                    <Text style={{ fontSize: 18, color: '#959595' }}>{item.givenName[0].toUpperCase()}</Text>
                  </View>
                  <Text style={{ fontSize: 18, color: '#959595' }}>
                    {item.givenName != null ? item.givenName : item.phoneNumbers[0].number}
                  </Text>
                </TouchableOpacity>
              )}
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
              sections={JSON.parse(JSON.stringify(this.props.store.arrContact))}
              keyExtractor={(item, index) => index}
            />
            <View
              style={{
                height: height - 240,
                width: 20,
                backgroundColor: '#F5F5F5',
                borderRadius: 1000
              }}
            >
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
                      style={{ height: (height - 240) / 27 > 15 ? (height - 240) / 27 : 15 }}
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
                      <Text style={{ color: '#B64F60', flex: 1, textAlign: 'center' }}>{item}</Text>
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
