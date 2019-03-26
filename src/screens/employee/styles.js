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
    height: deviceHeight * 0.65,
    width: deviceWidth,
    backgroundColor: "red"
  },
  emptyViewStyle: { height: deviceHeight * 0.05 },
  titleCardMainViewStyle: {
    marginTop: deviceHeight * 0.01,
    width: deviceWidth * 0.9,
    paddingLeft: 15,
    height: deviceHeight * 0.15,
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgb(128, 0, 0)"
  },
  titleCardImageStyle: {
    flex: 1,
    height: 30,
    width: 30
  },
  titleMaterialTopIconStyle: {
    height: 15,
    top: 15
  },
  titleMaterialBottomIconStyle: {
    height: 15,
    bottom: 15
  },
  childViewStyle: {
    backgroundColor: "rgb(128, 0, 0)",
    borderBottomEndRadius: 5,
    borderTopEndRadius: 5,
    height: deviceHeight * 0.15,
    width: deviceWidth * 0.1,
    justifyContent: "space-between"
  },
  titleCardTextStyle: {
    //  flex: 5,
    color: "black",
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "Roboto-Regular"
  },
  titleCardHeadingStyle: {
    color: "black",
    fontSize: 16,
    marginLeft: 14,
    fontFamily: "Roboto-Regular"
  },
  bottomButtonStyle: {
    height: deviceHeight * 0.065,
    margin: deviceHeight * 0.01,
    width: deviceWidth * 0.8,
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: "rgb(128, 0, 0)",
    justifyContent: "space-between",
    paddingHorizontal: deviceHeight * 0.07
  },
  buttonStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Roboto-Medium"
  },
  seperator: {
    borderLeftWidth: 3,
    borderLeftColor: "white"
  }
});
