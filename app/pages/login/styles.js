import {StyleSheet} from 'react-native'

export const styles=StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },

  registerButton: {
    top: 80,
    width:180,
    backgroundColor:'#ef2899',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },

  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'white',
    textAlign:'center'
  },

  inputBox: {
    backgroundColor:'#ffffff',
    paddingHorizontal:16,
    fontSize:16,
    marginVertical: 10,

  },
  loginButton: {
    top: 80,
    width:180,
    backgroundColor:'#49edea',
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
      borderColor: '#49edea',
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
forgotPwd: {
  left: 90,
  color: '#ef2899',
},
logo: {
  bottom: 90,
}

})
