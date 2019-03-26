import { StyleSheet, Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  },
  scrollViewStyle: {
    height: deviceHeight,
    width: deviceWidth
  },
  emptyViewStyle: { height: deviceHeight * 0.05 },
  emailTextFieldStyle: {
    marginTop: deviceHeight * 0.04,
    width: deviceWidth * 0.9
  },
  passwordTextFieldStyle: {
    marginTop: deviceHeight * 0.03,
    width: deviceWidth * 0.9
  },
  textStyle: {
    color: "rgb(128, 0, 0)",
    fontSize: deviceWidth < 375 ? 14 : 16
  },
  loginBtnStyle: {
    backgroundColor: "rgb(128, 0, 0)"
  },
  loginBtnTextColor: {
    color: "white"
  }
});
