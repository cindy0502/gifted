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
import { DrawerNavigator, DrawerItems} from 'react-navigation';

import {styles} from '../home/styles';
import AccountInfo from '../accountInfo/AccountInfo.js';
import CreateEvent from '../createEvent/CreateEvent.js';
import Notifications from '../notifications/Notifications.js';
import Home from './Home.js';
import Testing from './Home0.js';
import Testing2 from '../inviteFriends/InviteFriends0.js';
import { StackNavigator, } from 'react-navigation';
const backgroundColor = "#0067a7";
import { HomePage, CreateEventPage, AccountInfoPage, NotificationsPage } from '../../components/screenNames.js';


export default class Testing4 extends Component {

  render() {
    return (
      <View style={{left:240, top:-400}}>
          <TouchableOpacity onPress={() => {
             this.props.navigation.navigate('Notifications');
          }}>
            <Image source={require('../../images/notification.png')} style={styles.notification}/>
          </TouchableOpacity>

      </View>
    );
  }}
