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
FlatList,
 } from 'react-native';

//import RegisterForm from '../../components/RegisterForm.js';
import Headercomponent from '../../components/Headercomponent.js';
import ListView from './ListView';

import {NavigationActions} from 'react-navigation';

import {styles} from '../notifications/styles';


export default class Notifications extends Component {

  static navigationOptions = ({ navigation }) => {
    let drawerLabel = 'Home';

    return { drawerLabel };
}

  static navigationOptions ={
  header:null
 };

  render() {
    return (


        <View style = {styles.headercontainer}>


          <View style = {styles.header}>

          <TouchableOpacity onPress={() => {
             // this.props.navigation.navigate('Testing');
              const backAction = NavigationActions.back({key:null});
             this.props.navigation.dispatch(backAction);
          }}>
            <Image
            style = {{width: 20, height: 20}}
            Image source={require('../../images/back.png')} />
          </TouchableOpacity>
            <Text style = {styles.headerText}> NOTIFICATIONS </Text>
          </View>
          <StatusBar
            backgroundColor='#ffffff'
            barStyle="light-content"
          />

          <ListView />

        </View>






    );
  }
}
