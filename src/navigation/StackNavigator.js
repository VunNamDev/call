import { createStackNavigator } from 'react-navigation';

import SearchInforScreen from '../screens/searchInforScreen/SearchInforContainer';
import TabNavigator from './TabNavigator';
import ContactInforScreen from '../screens/contactInforScreen/ContactInforContainer';
import MyMapScreen from '../screens/mapScreen/MyMapContainer';
import CallLogScreen from '../screens/calllogScreen/CallLogContainer';
const StackNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: () => ({
      headerBackTitle: null,
      header: null
    })
  },
  CallLogScreen: {
    screen: CallLogScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
      header: null
    })
  },
  ContactInforScreen: {
    screen: ContactInforScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
      header: null
    })
  },
  MyMapScreen: {
    screen: MyMapScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
      header: null
    })
  },
  SearchInforScreen: {
    screen: SearchInforScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
      header: null
    })
  }
});
export default StackNavigator;
