import { StyleSheet, Dimensions } from "react-native";
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scrollViewStyle: {
    height: deviceHeight,
    width: deviceWidth,
  },
  emptyViewStyle: { height: deviceHeight * 0.05 },
  emailTextFieldStyle: {
    marginTop: deviceHeight * 0.02,
    width: deviceWidth * 0.9,
  },
  imageViewStyle: {
    height: deviceHeight * 0.3, 
    width: deviceWidth, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  imageStyle: {
    height: deviceHeight * 0.2, width: deviceWidth * 0.6 
  },
  textMessageViewStyle: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: deviceHeight * 0.05,  
    height: deviceHeight * 0.1, 
    width: deviceWidth
  },
  textMessageStyle: {
    color: 'rgb(128, 0, 0)', 
    textAlign: 'center', 
    flex: 0.8, 
    flexWrap: 'wrap'
  },
  passwordTextFieldStyle: {
    marginTop: deviceHeight * 0.03,
    width: deviceWidth * 0.9,
  },
  textStyle: {
    color: 'rgb(128, 0, 0)',
    fontSize: deviceWidth < 375 ? 14 : 16,
  },
  loginBtnStyle:{
      backgroundColor: 'rgb(128, 0, 0)'
  },
  loginBtnTextColor: {
      color: 'white',
  }
});
