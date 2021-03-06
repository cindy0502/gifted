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
import Something2 from './CreateEvent00.js';
import Headercomponent from '../../components/Headercomponent.js';


import {styles} from '../createEvent/styles';

export default class CreateEvent extends Component {

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
          <View style={{left:-80}}>
          <Headercomponent {...this.props}/>
          </View>
          {/* <TouchableOpacity>
          <Image source={require('../../images/menu.png')} style={styles.menu}/>
        </TouchableOpacity> */}
          <Text style = {styles.headerText}> CREATE EVENT </Text>
        </View>
        <StatusBar
          backgroundColor='#ffffff'
          barStyle="light-content"
        />

        <View style = {styles.bodycontainer}>


        <Image source={require('../../images/btn-plus.png')} style={styles.btnPlus}/>
        <Text style= {styles.photoText} >Add Event Title Photo </Text>
        <View style={styles.SectionStyle}>

          <TextInput style={{flex:1, left: 20, }}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder= "Event Title Name"
              placeholderTextColor = '#b3bcbc'
              selectionColor= "#fff"
              keyboardType= "email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
        </View>

        <View style ={styles.dateTime}>
        <View style={styles.Section2Style}>

          <TextInput style={{flex:1, left: 20,}}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder= "Date"
              placeholderTextColor = '#b3bcbc'
              selectionColor= "#fff"
              keyboardType= "email-address"
              onSubmitEditing={()=> this.password.focus()}
              />

        </View>

        <View style={styles.Section3Style}>

          <TextInput style={{flex:1, left: 20,}}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder= "Time"
              placeholderTextColor = '#b3bcbc'
              selectionColor= "#fff"
              keyboardType= "email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
        </View>
      </View>
        <View style={styles.SectionStyle}>

          <TextInput style={{flex:1, left: 20,}}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder= "Location/ Venue"
              placeholderTextColor = '#b3bcbc'
              selectionColor= "#fff"
              keyboardType= "email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
        </View>

          <View style={styles.detailsStyle}>

            <TextInput style={{flex:1, left: 20,}}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder= "Event Details"
                placeholderTextColor = '#b3bcbc'
                selectionColor= "#fff"
                keyboardType= "email-address"
                onSubmitEditing={()=> this.password.focus()}
                />
          </View>

          <View style={styles.donationStyle}>

            <TextInput style={{flex:1, left: 20,}}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder= "Donation Amount"
                placeholderTextColor = '#b3bcbc'
                selectionColor= "#fff"
                keyboardType= "email-address"
                onSubmitEditing={()=> this.password.focus()}
                />
          </View>

            <Text style= {styles.donationText} > Donation Images </Text>


            <Image source={require('../../images/add.png')} style={styles.redPlus}/>

      </View>
      {/* <Something2 /> */}
    </View>

    );
  }
}
