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
    backgroundColor: '#49edea',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 16,
    top: 15,
    padding: 26,
    fontWeight: 'bold',
  },
  back: {
    padding: 6,
    right: 35,
    top: 15,
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
    top: 120,
    width:170,
    backgroundColor:'#49edea',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10
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
      borderColor: '#49edea',
      height: 35,
      borderRadius: 15 ,
      margin: 10
},
password : {
  padding: 10,
  bottom: 65,
  height: 70,
  width: 70,
  resizeMode : 'stretch',
  alignItems: 'center'
},

pwdText : {
  padding: 35,
  bottom: 50,
  color: '#b3bcbc',
},
phone : {
  padding: 10,
  margin: 8,
  height: 15,
  width: 15,
  resizeMode : 'stretch',
  alignItems: 'center'
},


});
