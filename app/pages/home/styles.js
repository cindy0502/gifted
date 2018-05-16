import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
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
  menu : {
    padding: 10,
    top:10,
    right: 95,
    margin: 2,
    height: 1,
    width: 10,

  },
  notification : {
    padding: 10,
    top:13,
    left: 95 ,
    margin: 2,
    height: 1,
    width: 10,

  }
});
