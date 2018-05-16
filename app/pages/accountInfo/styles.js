import {StyleSheet} from 'react-native'

export const styles=StyleSheet.create({
  headercontainer : {
    flex: 1,
  },

  bodycontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    top:15,
    padding: 26,
    fontWeight: 'bold',
  },
  menu: {
    padding: 10,
    top:10,
    left: 1,
    margin: 2,
    height: 1,
    width: 10,

  },
  inputBox: {
    backgroundColor:'#ffffff',
    paddingHorizontal:16,
    fontSize:16,
    marginVertical: 10,

  },
  registerButton: {
    top: 40,
    width:170,
    height: 40,
    backgroundColor:'#49edea',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10
  },

  buttonText: {
    fontSize:16,
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
bank : {
    padding: 10,
    bottom: 15,
    height: 70,
    width: 70,
    resizeMode : 'stretch',
    alignItems: 'center'
},

pwdText : {
  padding: 35,
  fontSize:12,
  bottom: 5,
  color: '#b3bcbc',
},
card : {
    padding: 10,
    margin: 8,
    height: 15,
    width: 15,
    resizeMode : 'stretch',
    alignItems: 'center'
},


});
