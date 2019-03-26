// Libraries
import { Dimensions, Platform } from 'react-native';
// Constants
const deviceWidth = Dimensions.get('window').width;
// const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

export default {
  container: {
    height: 54,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  paddingView: {
    width: 15,
  },
  floatingLabel: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  fieldLabel: {
    fontFamily: 'Roboto-Regular',
    height: 15,
    fontSize: 12,
    color: 'rgb(58, 58, 58)',
  },
  fieldContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    opacity: 0.8,
    borderWidth: 1.5,
    borderColor: 'rgb(128, 0, 0)',
    borderRadius: 5,
    // borderBottomWidth: 1.5,
    // borderBottomColor: 'red',
    // borderTopWidth: 1.5,
    // borderTopColor: 'red',
  },
  focusedContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    opacity: 0.8,
    borderColor: 'rgb(128, 0, 0)',
    borderWidth: 1.5,
    borderRadius: 5,
  },
  withBorder: {
    borderColor: '#C8C7CC',
  },
  valueText: {
    height: isIOS ? 35 : 40,
    fontFamily: 'Roboto-Regular',
    fontSize: deviceWidth < 375 ? 12 : 14,
    color: '#111111',
    backgroundColor: '#fff',
    paddingLeft: 10,
    borderRadius: 5,
  },
  focused: {
      zIndex: 1,
    bottom: 12,
    color: 'red',
   // color: '#5F5D5D',
    fontSize: 12,
  },
  iconStyle: {
    backgroundColor: 'rgba(132, 132, 132)',
    color: 'rgba(132, 132, 132)',
    // position: "absolute",
    // left: 0,
    // top: 0,
    alignSelf: 'center',
  },
  passwordError: {
    fontSize: 14,
    color: 'red',
    width: deviceWidth * 0.9,
    alignSelf: 'center',
  },
  underlineStyling: {
    width: deviceWidth * 0.76,
    height: 0.8,
    backgroundColor: 'green',
    //backgroundColor: 'rgb(92,92,92)',
    position: 'absolute',
    bottom: 10,
    left: 6,
  },
};
