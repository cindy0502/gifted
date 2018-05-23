import {StyleSheet} from 'react-native'

export const styles=StyleSheet.create({
  headercontainer : {
    flex: 1,
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

  SectionStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 500,
    left: 12,
    top: 70

},
  couple : {
    justifyContent: 'center',
    alignItems: 'center',
    height: 220,
    width: 350,
    resizeMode : 'stretch',

},

  SectionStyle2: {
    flex: 1,
    width: 350,
    height: 500,
    top: 120,
    left: 12,
  },

  textTitle: {
    paddingTop: 10,
    color: 'red',
    fontSize: 18,
    textAlign:'center'
  },

  textContent: {
    paddingTop: 10,
    width: 350,
    textAlign:'center',
    fontSize: 12
  },

  SectionStyle3: {
    flex: 1,
    width: 350,
    height: 500,
    left: 12,
    top: 130
  },
  textDate: {
    textAlign: 'left',
  },

  textTime: {
    textAlign: 'right',
    bottom: 15,
  },

  buttonContainer: {
    flexDirection: 'row',
    top: 50
  },

  attendButton: {
    width:70,
    height: 30,
    backgroundColor:'#49edea',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10,
    left: 12
  },
  maybeButton: {
    width:70,
    height: 30,
    backgroundColor:'#49edea',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10,
    left: 80
  },

  declineButton: {
    width:70,
    height: 30,
    backgroundColor:'#49edea',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10,
    left: 150,
  },

  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'white',
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 10,
    fontWeight: 'bold'

  },
  imageContainer: {
    flexDirection: 'row',

  },
  bank: {
    width: 50,
    height: 50,
    margin: 40,
    borderRadius: 25,
    padding: 10,
    borderWidth: 0.5,
    top: 25,
    right: 8
  },

  buttonContainer2: {
    flexDirection: 'row',
    bottom: 15
  },
  pledge1Button: {
    width:70,
    height: 30,
    backgroundColor:'red',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10,
    left: 12
  },
  pledge2Button: {
    width:70,
    height: 30,
    backgroundColor:'red',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10,
    left: 80
  },

  pledge3Button: {
    width:70,
    height: 30,
    backgroundColor:'red',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10,
    left: 150,
  },
  back: {
    padding: 6,
    right: 95,
    top: 15,
    margin: 4,
    height: 2,
    width: 2,

  },
  // borderContainer: {
  //   borderBottomWidth: 1,
  //   borderTopWidth: 1,
  //   borderLeftWidth: 1,
  //   borderRightWidth: 1,
  // }


});
