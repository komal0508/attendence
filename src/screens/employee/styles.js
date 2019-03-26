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
  titleCardMainViewStyle: {
    marginTop: deviceHeight * 0.01,
    width: deviceWidth * 0.9,
    paddingLeft: 15,
    height: deviceHeight * 0.15,
    //backgroundColor: 'rgb(0, 177, 255)',
    alignSelf: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgb(128, 0, 0)'
  },
  titleCardImageStyle: {
    flex: 1,
    height: 30,
    width: 30,
  },
  titleMaterialTopIconStyle:{
    height: 15, 
    top: 15
  },
  titleMaterialBottomIconStyle: {
      height: 15,
      bottom: 15,
  },
  childViewStyle:{ backgroundColor: 'rgb(128, 0, 0)', 
  borderBottomEndRadius: 5,
   borderTopEndRadius: 5,
   height: deviceHeight * 0.15, 
   width: deviceWidth * 0.10,
   justifyContent: 'space-between',},
  titleCardTextStyle: {
  //  flex: 5,
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
  },
  titleCardHeadingStyle: {
    color: 'black',
    fontSize: 16,
    marginLeft: 14,
    fontFamily: 'Roboto-Regular',
  }
});
