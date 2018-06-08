import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Icon
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Headercomponent from '../../components/Headercomponent.js';
import { DrawerNavigator, DrawerItems} from 'react-navigation';
import Home from './Home.js';
import {styles} from '../home/styles';
import AccountInfo from '../accountInfo/AccountInfo.js';
import Login from '../login/Login.js';
import CreateEvent from '../createEvent/CreateEvent.js';
import Notifications from '../notifications/Notifications.js';
import Testing3 from './Home00.js';
import Testing2 from '../inviteFriends/InviteFriends0.js';

const backgroundColor = "#7CC7C2";
import { HomePage, CreateEventPage, AccountInfoPage, NotificationsPage } from '../../components/screenNames.js';

export default class Testing extends Component {

  static navigationOptions = ({ navigation }) => {
    
    // <View style={style.drawerHeader}>
    //     <Image source={require('../../images/logo.png')} />
    //   </View>
    let drawerLabel = 'Home';

    return { drawerLabel };
}


  static navigationOptions ={
  header:null
 };

  render() {
// -----------------------------------------------
var {height, width} = Dimensions.get('window');

let routeConfigs = {
  "My Home": {
    screen: Home,
  },

  // CreateEventPage: {
  //   screen: CreateEvent,
  // },

  "Create New Events": {
    screen: CreateEvent,
  },
  "Add/Edit Account": {
    screen: AccountInfo,
  },
  "Log out": {
    screen: Login,
  },
};

let drawerNavigatorConfig = {
  initialRouteName: "My Home",
  drawerWidth: width / 2,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerBackgroundColor: '#7CC7C2',
};

const Drawer = DrawerNavigator(routeConfigs, drawerNavigatorConfig);
// -----------------------------------------------

    return (

        <Drawer />



    );
  }

}
