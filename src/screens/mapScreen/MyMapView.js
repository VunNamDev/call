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
  StyleSheet,
  ScrollView
} from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import MapView, { Marker } from 'react-native-maps';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import I18n from '../../locales/I18n';

const { width, height } = Dimensions.get('window');
export default class MyMapView extends Component {
  render() {
    const lat = parseFloat(this.props.navigation.state.params.lat);
    const lng = parseFloat(this.props.navigation.state.params.lng);
    return (
      <View style={{ flex: 1, backgroundColor: '#FAFAFA', alignItems: 'center' }}>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: lat + 0.01,
              longitude: lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <Marker
              //y styleImage={{ height: 40, width: 40 }}
              image={require('../../asset/ic_placeholder.png')}
              coordinate={{ latitude: lat, longitude: lng }}
            />
          </MapView>
        </View>
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
          <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}> {I18n.t('locationChecker')}</Text>
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
          <View style={{ height: 80, flex: 1, marginRight: 5 }}>
            <Text style={{ color: '#A3A3A3', fontSize: 20, marginTop: 10 }}>{I18n.t('location')}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Text style={{ color: '#6A6A6A', fontSize: 16, marginTop: 5 }}>
                {this.props.navigation.state.params.placeName}
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: height,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
