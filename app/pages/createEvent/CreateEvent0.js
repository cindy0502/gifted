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

import Headercomponent from '../../components/Headercomponent.js'


import {styles} from '../createEvent/styles';

export default class Something1 extends Component {

  render() {
    return (

        <TouchableOpacity style={styles.loginButton}
          onPress={() => {
            this.props.navigation.navigate('InviteFriends');
          }}>
          <Text>Go to InviteFriends</Text>
        </TouchableOpacity>
      
    );
  }
}
