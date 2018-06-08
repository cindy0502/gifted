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


import {styles} from '../register/styles';

export default class Register extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      usernameValidate: false,
      password: '',
      passwordValidate: false,
      userAndPassIsEmpty: true,
    }
  }
  static navigationOptions ={
  header:null
 };
  render() {
    return (
      <View style = {styles.headercontainer}>

        <View style = {styles.header}>
          <Image source={require('../../images/back.png')} style={styles.back}/>
          <Text style = {styles.headerText}> REGISTER </Text>
        </View>
        <StatusBar
          backgroundColor='#ffffff'
          barStyle="light-content"
        />


        <View style = {styles.bodycontainer}>

          <View style={styles.SectionStyle}>
            <Image source={require('../../images/user.png')} style={styles.user}/>
            <TextInput style={{flex:1}}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Username"
                placeholderTextColor = '#b3bcbc'
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}
                />
          </View>

          <View style={styles.SectionStyle}>
            <Image source={require('../../images/password.png')} style={styles.password}/>
            <TextInput style={{flex:1}}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = '#b3bcbc'
                ref={(input) => this.password = input}
                />
          </View>

          <View style={styles.SectionStyle}>
            <Image source={require('../../images/password.png')} style={styles.password}/>
            <TextInput style={{flex:1}}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Confirm Password"
                secureTextEntry={true}
                placeholderTextColor = '#b3bcbc'
                ref={(input) => this.password = input}
                />
          </View>

          <View style={styles.SectionStyle}>
            <Image source={require('../../images/mail.png')} style={styles.mail}/>
            <TextInput style={{flex:1}}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="E-mail"
                secureTextEntry={true}
                placeholderTextColor = '#b3bcbc'
                keyboardType="email-address"
                ref={(input) => this.mail = input}
                />
          </View>

          <View style={styles.SectionStyle}>
            <Image source={require('../../images/phone.png')} style={styles.phone}/>
            <TextInput style={{flex:1}}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder= "Phone Number"
                placeholderTextColor = '#b3bcbc'
                selectionColor= "#fff"
                keyboardType= "email-address"
                onSubmitEditing={()=> this.password.focus()}
                />
          </View>

             <TouchableOpacity style={styles.registerButton}
               onPress={() => {
               this.props.navigation.navigate('Home');
             }}>
               <Text style={styles.buttonText}>Register{this.props.type}</Text>
             </TouchableOpacity>

        </View>
      </View>
    );
  }
}
