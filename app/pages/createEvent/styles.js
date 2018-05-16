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
    right: 65,
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
    margin: 10,
    bottom: 10
},
btnPlus : {
    padding: 10,
    top: 35,
    height: 80,
    width: 80,
    resizeMode : 'stretch',
    alignItems: 'center'
},

photoText : {
  padding: 35,
  fontSize:12,
  top: 10,
  color: '#b3bcbc',
},

Section2Style : {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  width: 110,
  borderWidth: 1.5,
  borderColor: '#49edea',
  height: 35,
  borderRadius: 15 ,
  margin: 10,
  right: 30,
  bottom: 45
},

Section3Style : {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  width: 110,
  borderWidth: 1.5,
  borderColor: '#49edea',
  height: 35,
  borderRadius: 15 ,
  margin: 10,
  left: 30,
  bottom: 45
},
dateTime : {
  flexDirection:'row',
  flexWrap:'wrap',
  top: 30

},
detailsStyle : {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  width: 300,
  borderWidth: 1.5,
  borderColor: '#49edea',
  height: 65,
  borderRadius: 15 ,
  margin: 10,
  bottom: 70
},

donationStyle : {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  width: 300,
  borderWidth: 1.5,
  borderColor: '#49edea',
  height: 35,
  borderRadius: 15 ,
  margin: 10,
  bottom: 65
},

donationText : {
  padding: 35,
  fontSize:12,
  bottom: 100,
  color: '#b3bcbc',
  right: 100

},

redPlus : {
    padding: 10,
    bottom: 110,
    height: 50,
    width: 50,
    right: 130,
    resizeMode : 'stretch',
    alignItems: 'center'
},





});
