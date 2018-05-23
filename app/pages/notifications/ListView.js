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

import flatListData from '../../components/flatListData.js';

import {styles} from '../notifications/styles';

class FlatListItem extends Component {
  render () {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        padding: 5,
        margin: 5,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#b3bcbc',



      }}>
      <Image

        source = {this.props.item.image}
        style = {{width: 50, height: 50, margin: 5, borderRadius: 25, padding: 10, borderWidth: 0.5}}
      >
      </Image>

      <View style= {styles.nameContainer}>
        <Text style={styles.textName}>{this.props.item.name}</Text>
      </View>

        <Text style={styles.textTime}>{this.props.item.time}</Text>
      </View>
    );
  }
}

export default class Notifications extends Component {
  render () {
    return (

      <View style={{flex: 1, marginTop:22}}>
       <FlatList
         data={flatListData}
         renderItem={({item, index})=> {
           //console.log('Item = ${JSON.stringify(item)}, index = ${index}');
           //Creatinga self defined props
           return (<FlatListItem item ={item} index={index}>

           </FlatListItem>);
         }}
         >
       </FlatList>
      </View>

    );
  }
}
