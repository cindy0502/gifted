import React from 'react';
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

import {styles} from '../verifyOtp/styles';

export default class VerifyOtp extends React.Component {

  static navigationOptions ={
  header:null
 };
  render() {
    return (
      <View style = {styles.headercontainer}>

        <View style = {styles.header}>
          <TouchableOpacity   onPress={() => {
            this.props.navigation.navigate('Login');
          }}>
          <Image source={require('../../images/back.png')} style={styles.back}/>
        </TouchableOpacity>
          <Text style = {styles.headerText}> VERIFY OTP </Text>
        </View>
        <StatusBar
          backgroundColor='#ffffff'
          barStyle="light-content"
        />

        <View style = {styles.bodycontainer}>


        <Image source={require('../../images/otpicon.png')} style={styles.password}/>
        <Text style= {styles.pwdText} >Lorem ipsum dolor sit er elit lamet,
        concectetaur cillium adipisingu pecu, sed do eiusmod tempor incididunt ut
        labore eLorem</Text>

          <View style={styles.SectionStyle}>
            <Image source={require('../../images/otpicon.png')} style={styles.phone}/>
            <TextInput style={{flex:1}}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder= "Phone Number"
                placeholderTextColor = '#b3bcbc'
                selectionColor= "#fff"
                keyboardType= "email-address"
                onSubmitEditing={()=> this.password.focus()}
                />
          </View>

          <TouchableOpacity
            onPress={() => {
            this.props.navigation.navigate('resendOtp');
          }}>
          <Text style={styles.resendtOtp}>Resend OTP?</Text>

        </TouchableOpacity>

             <TouchableOpacity style={styles.registerButton}>
               <Text style={styles.buttonText}>VERIFY{this.props.type}</Text>
             </TouchableOpacity>

      </View>
    </View>

    );
  }
}
