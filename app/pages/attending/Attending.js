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
ScrollView
 } from 'react-native';

//import RegisterForm from '../../components/RegisterForm.js';

import {styles} from '../attending/styles';



export default class Attending extends React.Component {
  state={
    toggle:true
  }

  _onPress(){
    const newState = !this.state.toggle;
    this.setState({toggle:newState})
  }

  static navigationOptions ={
  header:null
 };
  render() {
    const {toggle} =this.state;
    const buttonBg = toggle?'#49edea':'white'
    return (
      <View style = {styles.headercontainer}>
        <ScrollView>
        <View style = {styles.header}>
          <TouchableOpacity   onPress={() => {
            this.props.navigation.navigate('CreateEvent');
          }}>
          <Image source={require('../../images/back.png')} style={styles.back}/>
        </TouchableOpacity>
          <Text style = {styles.headerText}> ATTTENDING </Text>

        </View>

        <StatusBar
          backgroundColor='#ffffff'
          barStyle="light-content"
        />

        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image source={require('../../images/bank.png')} style={styles.bank}/>
            <Text style= {styles.textName}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../images/bank.png')} style={styles.bank}/>
            <Text style= {styles.textName}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../images/bank.png')} style={styles.bank}/>
            <Text style= {styles.textName}>Name</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={()=>this._onPress()}>
            <Image source={require('../../images/bank.png')} style={styles.bank}/>
            <Text style= {styles.textName}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../images/bank.png')} style={styles.bank}/>
            <Text style= {styles.textName}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../images/bank.png')} style={styles.bank}/>
            <Text style= {styles.textName}>Name</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image source={require('../../images/bank.png')} style={styles.bank}/>
            <Text style= {styles.textName}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../images/bank.png')} style={styles.bank}/>
            <Text style= {styles.textName}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../images/bank.png')} style={styles.bank}/>
            <Text style= {styles.textName}>Name</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image source={require('../../images/bank.png')} style={styles.bank}/>
            <Text style= {styles.textName}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../images/bank.png')} style={styles.bank}/>
            <Text style= {styles.textName}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../images/bank.png')} style={styles.bank}/>
            <Text style= {styles.textName}>Name</Text>
          </TouchableOpacity>

        </View>



    </ScrollView>
  </View>

    );
  }
}
