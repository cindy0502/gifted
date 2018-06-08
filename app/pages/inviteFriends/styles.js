import {StyleSheet} from 'react-native';

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
  doneText: {
    padding: 6,
    left: 45,
    top: 15,
    margin: 4,
    color: 'white',

  },

  registerButton: {
    top: 120,
    width:170,
    backgroundColor:'#7CC7C2',
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

  inputBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7CC7C2',
    height: 50
  },
  imageContainer: {
    flexDirection: 'row',

  },
  bank: {
    width: 80,
    height: 80,
    margin: 25,
    borderRadius: 40,
    borderColor: '#7CC7C2',
    padding: 5,
    borderWidth: 5,
    bottom: 10,
    right: 8
  },

  textName: {
    bottom: 10,
    left: 35,
    color: '#7CC7C2',
    fontSize: 18
  }

},)
