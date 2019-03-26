import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import styles from "./styles";
import {
  MaterialIconsType,
  MaterialCommunityIconsType,
  ImageIconType,
  EvilIconsType
} from "../constants";

export default class TitleHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderLeftIcon() {
    const { iconName, onBtnPress, isBackArrow, leftIconType } = this.props;

    let IconType = MaterialIcons;
    if (leftIconType === MaterialCommunityIconsType) {
      IconType = MaterialCommunityIcons;
    } else if (leftIconType === EvilIconsType) {
      IconType = EvilIcons;
    }

    if (leftIconType === ImageIconType) {
      if (iconName !== "" && isBackArrow) {
        return (
          <TouchableOpacity
            onPress={onBtnPress}
            style={styles.leftIconViewStyle}
          >
            <Image
              style={styles.imgIconStyle}
              source={iconName}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      }
    } else if (iconName !== "" && isBackArrow) {
      return (
        <TouchableOpacity onPress={onBtnPress} style={styles.leftIconViewStyle}>
          <IconType name={iconName} size={35} style={styles.iconStyle} />
        </TouchableOpacity>
      );
    }

    return null;
  }

  renderRightIcon() {
    const {
      rightFirstIconName,
      rightSecondIconName,
      onRightBtnPress,
      rightIconType,
      isRightDoubleIcon
    } = this.props;
    let IconType = MaterialIcons;
    let rightIconViewStyle = styles.rightIconViewStyle;
    if (isRightDoubleIcon) {
      rightIconViewStyle = {
        ...styles.rightIconViewStyle,
        width: 50
      };
    }
    if (rightIconType === MaterialCommunityIconsType) {
      IconType = MaterialCommunityIcons;
    } else if (rightIconType === EvilIconsType) {
      IconType = EvilIcons;
    }
    if (rightIconType === ImageIconType) {
      if (
        rightFirstIconName !== "" &&
        rightSecondIconName !== "" &&
        isRightDoubleIcon
      ) {
        return (
          <View style={rightIconViewStyle}>
            <TouchableOpacity onPress={onRightBtnPress}>
              <Image
                style={styles.imgIconStyle}
                source={rightFirstIconName}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onRightBtnPress}>
              <Image
                style={styles.imgIconStyle}
                source={rightSecondIconName}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        );
      } else if (rightFirstIconName !== "") {
        return (
          <TouchableOpacity
            onPress={onRightBtnPress}
            style={rightIconViewStyle}
          >
            <Image
              style={styles.imgIconStyle}
              source={rightFirstIconName}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      }
    } else {
      if (
        rightFirstIconName !== "" &&
        rightSecondIconName !== "" &&
        isRightDoubleIcon
      ) {
        return (
          <TouchableOpacity
            onPress={onRightBtnPress}
            style={rightIconViewStyle}
          >
            <IconType
              name={rightFirstIconName}
              size={35}
              style={styles.iconStyle}
            />
            <IconType
              name={rightSecondIconName}
              size={35}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        );
      } else if (rightFirstIconName !== "") {
        return (
          <TouchableOpacity
            onPress={onRightBtnPress}
            style={rightIconViewStyle}
          >
            <IconType
              name={rightFirstIconName}
              size={35}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        );
      }
    }

    return null;
  }

  render() {
    const { title, titleStyle, isRightDoubleIcon } = this.props;
    let titleStyling = styles.titleText;
    let textViewStyle = styles.textViewStyle;
    if (isRightDoubleIcon) {
      textViewStyle = {
        ...styles.textViewStyle,
        flex: 4
      };
    }
    if (titleStyle && titleStyle.length > 0) {
      titleStyling = {
        ...styles.titleText,
        ...titleStyle
      };
    }

    return (
      <View style={styles.mainContainer}>
        <View style={styles.iconRenderViewStyle}>{this.renderLeftIcon()}</View>
        <View style={textViewStyle}>
          <Text style={titleStyling}>{title}</Text>
        </View>
        <View style={styles.iconRenderViewStyle}>{this.renderRightIcon()}</View>
      </View>
    );
  }
}
TitleHeader.defaultProps = {
  title: "",
  iconName: "",
  rightFirstIconName: "",
  titleStyle: null,
  isBackArrow: false,
  onBtnPress: () => {},
  onRightBtnPress: () => {},
  rightIconType: MaterialIconsType,
  leftIconType: MaterialIconsType
};
TitleHeader.propTypes = {
  title: PropTypes.string,
  iconName: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rightSecondIconName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onBtnPress: PropTypes.func,
  onRightBtnPress: PropTypes.func,
  titleStyle: PropTypes.objectOf(PropTypes.any),
  isBackArrow: PropTypes.bool,
  rightIconType: PropTypes.string,
  leftIconType: PropTypes.string
};
