import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, } from 'react-navigation';

import Login from './app/pages/login/Login.js';
import Register from './app/pages/register/Register.js';
import ForgotPwd from './app/pages/forgotPwd/ForgotPwd.js';
import Home from './app/pages/home/Home.js';
import AccountInfo from './app/pages/accountInfo/AccountInfo.js';
import CreateEvent from './app/pages/createEvent/CreateEvent.js';

const RootStack = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Home: { screen: Home },
  AccountInfo: { screen: AccountInfo },
  CreateEvent: { screen: CreateEvent },
  ForgotPwd: { screen: ForgotPwd },
});


export default class App extends React.Component {
  render() {
    return (

        <RootStack />

    );
  }
}
