import { StyleSheet, Dimensions } from 'react-native';
// Constants
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loginBtn: {
   // backgroundColor: 'red',
    width: deviceWidth * 0.9,
    height: deviceHeight * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: 'rgb(128, 0, 0)',
    borderWidth: 0.5,
  },
  loginBtnText: {
    color: 'rgb(128, 0, 0)',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
  },
});
