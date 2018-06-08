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



import {styles} from '../invitedEvent/styles';


export default class InvitedEvent extends Component {

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

            <TouchableOpacity   onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Image source={require('../../images/back.png')} style={styles.back}/>
          </TouchableOpacity>

          {/* <TouchableOpacity>
            <Image source={require('../../images/menu.png')} style={styles.menu}/>
          </TouchableOpacity> */}
            <Text style = {styles.headerText}> INVITED EVENT </Text>
          </View>
          <StatusBar
            backgroundColor='#ffffff'
            barStyle="light-content"
          />

          <View style={styles.SectionStyle}>

            <Image source={require('../../images/couple.png')} style={styles.couple}/>
          </View>



          <View style={styles.SectionStyle2}>
            <Text style={styles.textTitle}>James Weds Sara</Text>

            <Text style={styles.textContent}>Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been Industry's standard
              dummy text ever since the 1500s, when an unknown printer took gallery of type and scammed
              it to make a type. </Text>


          </View>

          <View style={styles.SectionStyle3}>
            <Text style= {styles.textDate}>16-Dec-2016</Text>
            <Text style = {styles.textTime}>10:30 am</Text>
          </View>


          <View style= {styles.buttonContainer}>
            <TouchableOpacity style={styles.attendButton}>
              <Text style={styles.buttonText}>ATTENDING{this.props.type}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.maybeButton}>
              <Text style={styles.buttonText}>MAYBE{this.props.type}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.declineButton}>
              <Text style={styles.buttonText}>DECLINE{this.props.type}</Text>
            </TouchableOpacity>
          </View>

          <Text style={{textAlign: 'center', top: 50 }}>Donation raised so far</Text>

          <View style={styles.imageContainer}>
            <Image source={require('../../images/bank.png')} style={styles.bank}/>
            <Image source={require('../../images/bank.png')} style={styles.bank}/>
            <Image source={require('../../images/bank.png')} style={styles.bank}/>
          </View>
          <View style= {styles.buttonContainer2}>
            <TouchableOpacity style={styles.pledge1Button}>
              <Text style={styles.buttonText}>PLEDGE{this.props.type}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pledge2Button}>
              <Text style={styles.buttonText}>PLEDGE{this.props.type}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pledge3Button}>
              <Text style={styles.buttonText}>PLEDGE{this.props.type}</Text>
            </TouchableOpacity>
          </View>


        </View>









    );
  }
}
