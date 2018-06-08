import {StyleSheet} from 'react-native'

export const styles=StyleSheet.create({
  headercontainer : {
    flex: 1,
  },

  bodycontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#7CC7C2',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 16,
    padding: 26,
    fontWeight: 'bold',
  },
  back: {
    padding: 6,
    right: 70,
    margin: 4,
    height: 2,
    width: 2,

  },
  inputBox: {
    backgroundColor:'#ffffff',
    paddingHorizontal:16,
    fontSize:16,
    marginVertical: 10,

  },
  registerButton: {
    top: 80,
    width:150,
    backgroundColor:'#C71616',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },

  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'white',
    textAlign:'center',
    fontWeight: 'bold'

  },
  SectionStyle: {
    flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      width: 300,
      borderWidth: 1.5,
      borderColor: '#7CC7C2',
      height: 40,
      borderRadius: 15 ,
      margin: 10
},
user : {
    padding: 10,
    margin: 8,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},

password : {
    padding: 10,
    margin: 8,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},
mail: {
    padding: 10,
    margin: 8,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},
phone : {
    padding: 10,
    margin: 8,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},


});
