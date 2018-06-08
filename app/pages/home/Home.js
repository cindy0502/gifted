import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Dimensions,Alert,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Headercomponent from '../../components/Headercomponent.js';
import { DrawerNavigator, DrawerItems} from 'react-navigation';
import { StackNavigator, } from 'react-navigation';
import {styles} from '../home/styles';
import AccountInfo from '../accountInfo/AccountInfo.js';
import CreateEvent from '../createEvent/CreateEvent.js';
import Notifications from '../notifications/Notifications.js';
import Testing from './Home0.js';

import Testing3 from './Home00.js';
const backgroundColor = "#0067a7";
import { HomePage, CreateEventPage, AccountInfoPage, NotificationsPag } from '../../components/screenNames.js';

export default class Home extends Component {

  static navigationOptions = ({ navigation }) => {

    let drawerLabel = 'Home';

    return { drawerLabel };
}
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  static navigationOptions ={
  header:null
 };

  render() {
// -----------------------------------------------
// -----------------------------------------------
  var something;
    return (
      <View style={styles.container}>

        <View style = {styles.header}>

            <View style={{
              left:-100,
              height:90,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}>
              <TouchableOpacity style={{marginLeft: 10, marginTop: 20}}
                onPress={()=> {
                  const {navigate} = this.props.navigation;
                  navigate('DrawerOpen');
                   //<Testing />
                }}>

                <Image
                style = {{width: 20, height: 20}}
                Image source={require('../../images/menu.png')} />

              </TouchableOpacity>
            </View>
              <Text style = {styles.headerText}> HOME </Text>

               {/* <TouchableOpacity onPress={() => {
                //Alert.alert('working');
                this.props.navigation.navigate('Testing3');

              }}>
                <Image source={require('../../images/notification.png')} style={styles.notification}/>
              </TouchableOpacity> */}

        </View>







        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
        />

        <View style={{width:'100%', height:'100%'}}>
        <Testing3 />
        </View>
      </View>

    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    something = day.dateString;
    Alert.alert(something);

  }
}
