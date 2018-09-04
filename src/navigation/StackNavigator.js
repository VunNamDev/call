import { createStackNavigator } from 'react-navigation';

import SearchInforScreen from '../screens/search_infor_screen/SearchInforContainer';
import TabNavigator from './TabNavigator';
import ContactInforScreen from '../screens/contact_infor_screen/ContactInforContainer';
import MyMapScreen from '../screens/map_screen/MyMapContainer';
import CallLogScreen from '../screens/calllog_screen/CallLogContainer';
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
