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

//import RegisterForm from '../../components/RegisterForm.js';
import Headercomponent from '../../components/Headercomponent.js'

import {styles} from '../accountInfo/styles';

export default class AccountInfo extends Component {

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

          <Headercomponent {...this.props}/>

        {/* <TouchableOpacity>
          <Image source={require('../../images/menu.png')} style={styles.menu}/>
        </TouchableOpacity> */}
          <Text style = {styles.headerText}> CHANGE ACCOUNT INFORMATION </Text>
        </View>
        <StatusBar
          backgroundColor='#ffffff'
          barStyle="light-content"
        />

        <View style = {styles.bodycontainer}>


        <Image source={require('../../images/bank.png')} style={styles.bank}/>
        <Text style= {styles.pwdText} >Lorem ipsum dolor sit er elit lamet,
        concectetaur cillium adipisingu pecu, sed do eiusmod tempor incididunt ut
        labore eLorem</Text>
        <View style={styles.SectionStyle}>
          <Image source={require('../../images/card.png')} style={styles.card}/>
          <TextInput style={{flex:1}}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder= "Card HolderName"
              placeholderTextColor = '#b3bcbc'
              selectionColor= "#fff"
              keyboardType= "email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
        </View>

        <View style={styles.SectionStyle}>
          <Image source={require('../../images/card.png')} style={styles.card}/>
          <TextInput style={{flex:1}}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder= "Card Number"
              placeholderTextColor = '#b3bcbc'
              selectionColor= "#fff"
              keyboardType= "email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
        </View>

        <View style={styles.SectionStyle}>
          <Image source={require('../../images/card.png')} style={styles.card}/>
          <TextInput style={{flex:1}}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder= "CVV"
              placeholderTextColor = '#b3bcbc'
              selectionColor= "#fff"
              keyboardType= "email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
        </View>

          <View style={styles.SectionStyle}>
            <Image source={require('../../images/card.png')} style={styles.card}/>
            <TextInput style={{flex:1}}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder= "Expiry Date"
                placeholderTextColor = '#b3bcbc'
                selectionColor= "#fff"
                keyboardType= "email-address"
                onSubmitEditing={()=> this.password.focus()}
                />
          </View>

             <TouchableOpacity style={styles.registerButton}>
               <Text style={styles.buttonText}>UPDATE{this.props.type}</Text>
             </TouchableOpacity>

      </View>
    </View>

    );
  }
}
