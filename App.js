import React from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import { DrawerNavigator, } from 'react-navigation';

import Login from './app/pages/login/Login.js';
import Register from './app/pages/register/Register.js';
import ForgotPwd from './app/pages/forgotPwd/ForgotPwd.js';
import Home from './app/pages/home/Home.js';
import AccountInfo from './app/pages/accountInfo/AccountInfo.js';
import CreateEvent from './app/pages/createEvent/CreateEvent.js';
import VerifyOtp from './app/pages/verifyOtp/VerifyOtp.js';
import Notifications from './app/pages/notifications/Notifications.js';
import ListView from './app/pages/notifications/ListView.js';
import MyEvent from './app/pages/myEvent/MyEvent.js';
import Headercomponent from './app/components/Headercomponent.js';

import { HomePage, CreateEventPage, AccountInfoPage, NotificationsPage } from './app/components/screenNames.js';


    var {height, width} = Dimensions.get('window');

    let routeConfigs = {
      HomePage: {
        screen: Home,
      },

      CreateEventPage: {
        screen: CreateEvent,
      },

      AccountInfoPage: {
        screen: AccountInfo,
      },

      NotificationsPage: {
        screen: Notifications,
      },

    };

    let drawerNavigatorConfig = {
      initialRouteName: HomePage,
      drawerWidth: width / 2,
      drawerPosition: 'left',
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
    };



const Drawer = DrawerNavigator(routeConfigs, drawerNavigatorConfig);
// AppRegistry.registerComponent ('App', () => App);

// const RootStack = StackNavigator({
//   Login: { screen: Login },
//   Register: { screen: Register },
//   Home: { screen: Home },
//   AccountInfo: { screen: AccountInfo },
//   CreateEvent: { screen: CreateEvent },
//   ForgotPwd: { screen: ForgotPwd },
// });


export default class App extends React.Component {
  render() {
    return (

        <MyEvent />
        //<Drawer />

    );
  }
}
