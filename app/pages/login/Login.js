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
Image } from 'react-native';

//import LoginForm from '../../components/LoginForm.js';
//import Logo from '../../components/Logo.js';


import {styles} from '../login/styles';

export default class Login extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      usernameValidate: false,
      password: '',
      passwordValidate: false,
      userAndPassIsEmpty: true,
    }
    //this._login = this._login.bind(this)
  }
  static navigationOptions ={
  header:null
 };
  render() {
    return (
      <View style = {styles.container}>
        <StatusBar
          backgroundColor='#ffffff'
        />
        <Image source={require('../../images/logo.png')} style={styles.logo}/>
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
          <TouchableOpacity
            onPress={() => {
            this.props.navigation.navigate('ForgotPwd');
          }}>
          <Text style={styles.forgotPwd}>Forgot Password?</Text>

        </TouchableOpacity>

           <TouchableOpacity style={styles.loginButton}>
             <Text style={styles.buttonText}>Login{this.props.type}</Text>
           </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}>
          <Text style={styles.buttonText}>Register{this.props.type}</Text>

        </TouchableOpacity>
      </View>

    );
  }
}
