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
});
