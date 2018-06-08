import React from 'react';
import { AppRegistry, Dimensions, Image, StyleSheet, View, Text } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import { DrawerNavigator, DrawerItems} from 'react-navigation';
import {Container,Content,Header,Body,Icon} from 'native-base';

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
import InvitedEvent from './app/pages/invitedEvent/InvitedEvent.js';
import InviteFriends from './app/pages/inviteFriends/InviteFriends.js';
import Attending from './app/pages/attending/Attending.js';
import NonAttending from './app/pages/nonAttending/NonAttending.js';
import Testing2 from './app/pages/inviteFriends/InviteFriends0.js';
import Headercomponent from './app/components/Headercomponent.js';
import Testing from './app/pages/home/Home0.js';
import { HomePage, CreateEventPage, AccountInfoPage, NotificationsPage } from './app/components/screenNames.js';


    var {height, width} = Dimensions.get('window');



    const Routes = StackNavigator({

      Login: { screen: Login },
      Home:{screen: Home},
      Register:{screen: Register},
      ForgotPwd: {screen: ForgotPwd},
      Testing:{screen: Testing},
      //Testing2:{screen: Testing2},

         },
       {
      headerMode:'none'
        })


export default class App extends React.Component {
  render() {
    return (

        <Routes/>

    );
  }
}
