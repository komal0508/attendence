import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { deviceWidth, deviceHeight, invalid, valid, invalidEmail } from '../constants';
import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class TitleCard extends Component {
  render() {
    const {
      icon,
      name,
      empId,
      titleCardMainViewStyle,
      titleCardImageStyle,
      titleCardTextStyle,
      titleCardHeadingStyle,
      titleMaterialBottomIconStyle,
      titleMaterialTopIconStyle,
      onPress,
      type,
      childViewStyle,
      rightTopIcon,
      rightBottomIcon,
      disable,
      imageTopViewStyle,
      imageBottomViewStyle,
    } = this.props;
    let ParentView = View;
    let ChildView = TouchableOpacity;
    let parentViewOnPress = () => {};
    let childViewOnPress = onPress;
    if (type === 'tab') {
      ParentView = TouchableOpacity;
      ChildView = View;
      parentViewOnPress = onPress;
      childViewOnPress = () => {};
    }

    return (
      <ParentView style={titleCardMainViewStyle} onPress={parentViewOnPress}>
      <View style={styles.imageOuterContainer}>
              <View style={styles.imageInnerContainer}>
              <Image
              resizeMode="contain"
              source={icon}
              style={titleCardImageStyle}
            />
              </View>
          </View>

        <View style={{flex: 5}}>
        <View style={{flexDirection: 'row'}}>
        <Text style={titleCardHeadingStyle}>Name:</Text>
        <Text style={titleCardTextStyle}>{name}</Text>
        </View>
        
        <View style={{flexDirection: 'row'}}>
        <Text style={titleCardHeadingStyle}>Emp ID:</Text>
        <Text style={titleCardTextStyle}>{empId}</Text>
        </View>
        </View>
        
        {!disable && (
            <View style={childViewStyle}>
          <ChildView style={imageTopViewStyle} onPress={childViewOnPress}>
          <Image resizeMode="contain" style={titleMaterialTopIconStyle} source={rightTopIcon} />
          </ChildView>
          <View style={styles.seperator}/>
          <ChildView style={imageBottomViewStyle} onPress={childViewOnPress}>
            <Image resizeMode="contain" style={titleMaterialBottomIconStyle} source={rightBottomIcon} />
          </ChildView>
            </View>
        
        )}
      </ParentView>
    );
  }
}
TitleCard.defaultProps = {
  icon: 'person-outline',
  text: 'ETH Wallet',
  titleCardMainViewStyle: null,
  titleCardImageStyle: null,
  titleCardTextStyle: null,
  titleMaterialBottomIconStyle: null,
  onPress: () => {},
  type: 'list',
  childViewStyle: {
    width: 40,
    alignItems: 'center',
   
  },
  rightTopIcon: 'keyboard-arrow-right',
  disable: false,
};

TitleCard.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string,
  titleCardMainViewStyle: PropTypes.objectOf(PropTypes.any),
  titleCardImageStyle: PropTypes.objectOf(PropTypes.any),
  titleCardTextStyle: PropTypes.objectOf(PropTypes.any),
  titleMaterialBottomIconStyle: PropTypes.objectOf(PropTypes.any),
  onPress: PropTypes.func,
  type: PropTypes.string,
  childViewStyle: PropTypes.objectOf(PropTypes.any),
  rightTopIcon: PropTypes.string,
  disable: PropTypes.bool,
};
