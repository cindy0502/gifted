import React, {Component} from 'react';
import {
  Text, View, Image, TouchableOpacity
} from 'react-native';

export default class Headercomponent extends Component {
  render() {
    return (
      <View style={{
        height:90,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <TouchableOpacity style={{marginLeft: 10, marginTop: 20}}
          onPress={()=> {
            const {navigate} = this.props.navigation;
            navigate('DrawerOpen');
          }}><Image
          style = {{width: 20, height: 20}}
          Image source={require('../images/menu.png')} />
        </TouchableOpacity>
      </View>
    )
  }
}
