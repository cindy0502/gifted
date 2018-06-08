import React, {Component} from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
TextInput,
StatusBar,
Alert,
TouchableOpacity,
Image,
 } from 'react-native';
import Something1 from './CreateEvent0.js';
import InviteFriends from '../inviteFriends/InviteFriends.js';
import { DrawerNavigator, StackNavigator, DrawerItems} from 'react-navigation';
import {styles} from '../createEvent/styles';
const Routes2 = StackNavigator({
  Something1: { screen: Something1 },
  // Testing: { screen: Testing },

  InviteFriends: {
    screen: InviteFriends },

  },
   {
  headerMode:'none'
    })
export default class Something2 extends Component {

  render() {
    return (
      <View>

    
      <Routes2 />

    </View>
    );
  }
}
