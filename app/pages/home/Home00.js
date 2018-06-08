import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Headercomponent from '../../components/Headercomponent.js';
import { DrawerNavigator, StackNavigator, DrawerItems} from 'react-navigation';
import {styles} from '../home/styles';
import AccountInfo from '../accountInfo/AccountInfo.js';
import CreateEvent from '../createEvent/CreateEvent.js';
import Notifications from '../notifications/Notifications.js';
import Home from './Home.js';
import Testing from './Home0.js';
import Testing4 from './Home000.js';
import Testing2 from '../inviteFriends/InviteFriends0.js';
const backgroundColor = "#0067a7";
import { HomePage, CreateEventPage, AccountInfoPage, NotificationsPage } from '../../components/screenNames.js';

const Routes2 = StackNavigator({
  Testing4: { screen: Testing4 },
  // Testing: { screen: Testing },

  Notifications: {
    screen: Notifications },

  },
   {
  headerMode:'none'
    })
export default class Testing3 extends Component {

  render() {
    return (
      <Routes2 />
    );
  }}
