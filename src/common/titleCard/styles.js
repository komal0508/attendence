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
 imageOuterContainer: {
    height: deviceHeight * 0.02, 
    width: deviceWidth * 0.1, 
    justifyContent: 'center', 
    margin: 15,
    alignItems: 'center'
 },
 imageInnerContainer: {
    borderWidth: 1, 
    borderColor: 'lightgray', 
    height: 75, 
    width: 75, 
    borderRadius: 37, 
    justifyContent: 'center', 
    alignItems: 'center'
 },
  seperator: {
    borderBottomWidth: 1, 
    borderBottomColor: 'white',  
    marginLeft: 7, 
    marginEnd: 7 
  },
});
