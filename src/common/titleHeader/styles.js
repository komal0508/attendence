import { StyleSheet, Platform } from 'react-native';
import { isIPhoneX } from '../../utility';
// Constants
import { deviceWidth, deviceHeight } from '../constants';

let marginTop = 10;
if (Platform.OS === 'ios') {
  marginTop = isIPhoneX() ? 54 : 30;
} else if (Platform.OS === 'android') {
  marginTop = 10;
}
export default StyleSheet.create({
  mainContainer: {
    width: deviceWidth,
    height: deviceHeight * 0.1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    //marginTop,
    backgroundColor: 'rgb(128,0,0)',
  },

  titleText: {
    // width: deviceWidth * 0.8,
    textAlign: 'center',
    fontSize: deviceHeight < 675 ? 16 : 18,
    fontWeight: '600',
    fontFamily: 'Roboto-Medium',
    color: 'white'
  },
  rightIconViewStyle: {
    alignItems: 'center',
    height: 44,
    width: 44,
    justifyContent: 'space-between',
    flexDirection: 'row',
  //  paddingRight: 10,
  },
  leftIconViewStyle: {
    alignItems: 'center',
    height: 44,
    width: 44,
    justifyContent: 'center',
  },
  imgIconStyle: { height: 20, width: 20, tintColor: 'white', paddingHorizontal: 4},
  iconStyle: { fontWeight: 'bold', color: 'white' },
  iconRenderViewStyle: { flex: 1, paddingHorizontal: 10 },
  textViewStyle: { flex: 6 },
  
});
