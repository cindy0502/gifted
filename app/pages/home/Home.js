import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Calendar} from 'react-native-calendars';

import {styles} from '../home/styles';

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
    return (
      <View style={styles.container}>

        <View style = {styles.header}>
        <TouchableOpacity>
          <Image source={require('../../images/menu.png')} style={styles.menu}/>
        </TouchableOpacity>
          <Text style = {styles.headerText}> HOME </Text>
          <TouchableOpacity>
            <Image source={require('../../images/notification.png')} style={styles.notification}/>
          </TouchableOpacity>
        </View>

        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
        />



      </View>

    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}
