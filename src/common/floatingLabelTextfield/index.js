/* eslint-disable */
// libraries
import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Animated,
  TouchableOpacity,
  Image
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Email from "../../images/Email.png";
import Password from "../../images/Password.png";
// Styling
import styles from "./styles";
import {
  deviceHeight,
  deviceWidth,
  invalid,
  valid
} from "../../common/constants";

/**
 * @class FloatingLabel : For label floating with text input.
 */
class FloatingLabel extends Component {
  constructor(props) {
    super(props);
    const { visible } = this.props;
    let initialPadding = 9;
    let initialOpacity = 0;
    if (visible) {
      initialPadding = 5;
      initialOpacity = 1;
    }

    this.state = {
      paddingAnim: new Animated.Value(initialPadding),
      opacityAnim: new Animated.Value(initialOpacity)
    };
  }

  componentWillReceiveProps(newProps) {
    const { paddingAnim, opacityAnim } = this.state;
    Animated.timing(paddingAnim, {
      toValue: newProps.visible !== "" ? 3 : 9,
      duration: 150
    }).start();

    return Animated.timing(opacityAnim, {
      toValue: newProps.visible !== "" ? 1 : 0,
      duration: 150
    }).start();
  }

  render() {
    const { paddingAnim, opacityAnim } = this.state;

    const { children } = this.props;
    return (
      <Animated.View
        style={[
          styles.floatingLabel,
          {
            height: 80,
            paddingTop: paddingAnim,
            opacity: opacityAnim,
            paddingLeft: 10
          }
        ]}
      >
        {children}
      </Animated.View>
    );
  }
}

/**
 * @class TextFieldHolder : For wrapper of text input.
 */
class TextFieldHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marginAnim: new Animated.Value(this.props.withValue ? 10 : 0)
    };
  }

  componentWillReceiveProps(newProps) {
    const { marginAnim } = this.state;
    return Animated.timing(marginAnim, {
      toValue: newProps.withValue ? 10 : 0,
      duration: 150
    }).start();
  }

  render() {
    const { children } = this.props;
    const { marginAnim } = this.state;
    return (
      <Animated.View style={{ marginTop: marginAnim }}>
        {children}
      </Animated.View>
    );
  }
}

/**
 * @class FloatLabelTextField : Generic component for text inputs.
 */
class FloatLabelTextField extends Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      focused: false,
      text: value,
      showPassword: false,
      passwordIcon: "lock-outline", // "visibility-off",
      error: ""
    };

    this.onChangeTextHandler = this.onChangeTextHandler.bind(this);
    this.checkType = this.checkType.bind(this);
    this.errorDisplay = this.errorDisplay.bind(this);
    this.iconDisplay = this.iconDisplay.bind(this);
    this.input = React.createRef();
  }

  onEndEditing(value, type) {
    // const { confirm, updateForm } = this.props;
    // if (!confirm) {
    //   updateForm(value, type);
    //   setTimeout(() => this.validate(value, type), 5);
    // }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      text: newProps.value
    });
  }
  onChangeTextHandler(value, type) {
    const { updateForm } = this.props;
    if (type !== "" && updateForm) {
      updateForm(value, type);
      this.setState({
        text: value,
        error: ""
      });
    }
  }

  focus() {
    this.input.current.focus();
  }

  setFocus() {
    this.setState({
      focused: true
    });
  }
  clearState() {
    this.setState({
      text: "",
      error: ""
    });
  }

  onBlurTextInput(value, type) {
    const { validateFields, checkEmptyFields } = this.props;
    if (type && type !== "") {
      if (value === "") {
        this.unsetFocus();
      } else {
        let status = "";
        if (validateFields) {
          status = validateFields(type);
          if (status === invalid) {
            this.setState({
              text: "",
              focused: false
            });
          }
        }
      }
    }
  }

  placeholderValue(placeholder) {
    return placeholder;
  }

  labelStyle() {
    const { focused } = this.state;
    const { type } = this.props;
    let width = 100;
    if (type === "password") {
      width = 60;
    }
    let fieldLabel = styles.fieldLabel;
    if (focused) {
      fieldLabel = {
        ...styles.fieldLabel,
        bottom: 12,
        color: "rgb(128, 0, 0)",
        backgroundColor: "#fff",
        zIndex: 100000,
        width: width,
        borderColor: "rgb(128,0,0)"
      };
      return fieldLabel;
    } else {
      return styles.fieldLabel;
    }
  }

  fieldStyle() {
    const { focused } = this.state;
    let fieldContainer = styles.fieldContainer;
    if (focused) {
      fieldContainer = {
        ...styles.fieldContainer,
        borderColor: "rgb(128, 0, 0)"
      };
      return fieldContainer;
    } else {
      return styles.fieldContainer;
    }
  }

  unsetFocus() {
    this.setState({
      focused: false
    });
  }

  inputFieldProp(inputType, valueType) {
    let inputFieldSettings = {
      keyboardType: "default",
      secureTextEntry: false
    };
    if (inputType && inputType !== "") {
      if (inputType === "text" && valueType && valueType !== "") {
        if (valueType === "password") {
          inputFieldSettings = {
            keyboardType: "default",
            secureTextEntry: true
          };
        }
      }
      if (inputType === "email") {
        inputFieldSettings = {
          keyboardType: "email-address",
          secureTextEntry: false
        };
      }
    }
    return inputFieldSettings;
  }

  renderInputField() {
    const { text, passwordIcon, showPassword } = this.state;
    const {
      placeholder,
      autoCorrect,
      inputBackgroundColor,
      textFieldSize,
      defaultValue,
      value,
      type,
      maxLength,
      inputType,
      valueType,
      editable,
      rightTextStyle,
      isShowRightText,
      rightTextValue,
      rightTextValueStyle,
      onPressRightBtn
    } = this.props;

    const inputFieldSettings = this.inputFieldProp(inputType, valueType);

    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <View style={[this.fieldStyle()]}>
            <FloatingLabel visible={text}>
              <Text style={[this.labelStyle()]}>
                {this.placeholderValue(placeholder)}
              </Text>
            </FloatingLabel>
            <TextFieldHolder withValue={text}>
              <View>
                <TextInput
                  {...this.props}
                  ref={this.input}
                  editable={editable}
                  autoCorrect={autoCorrect}
                  underlineColorAndroid="transparent"
                  style={[
                    styles.valueText,
                    {
                      backgroundColor: inputBackgroundColor,
                      width: textFieldSize,
                      backgroundColor: "transparent"
                    }
                  ]}
                  defaultValue={defaultValue}
                  value={value}
                  maxLength={maxLength}
                  onFocus={() => this.setFocus()}
                  onBlur={() => this.onBlurTextInput(text, type)}
                  onChangeText={text => this.onChangeTextHandler(text, type)}
                  placeholderTextColor="grey"
                  keyboardType={inputFieldSettings.keyboardType}
                  secureTextEntry={inputFieldSettings.secureTextEntry}
                  onEndEditing={() => this.onEndEditing(text, type)}
                />
                {/* {isShowRightText && (
                  <TouchableOpacity
                    style={rightTextStyle}
                    onPress={onPressRightBtn}
                  >
                    <Text style={rightTextValueStyle}>{rightTextValue}</Text>
                  </TouchableOpacity>
                )} */}
              </View>
            </TextFieldHolder>
          </View>
        </View>
      </View>
    );
  }

  iconDisplay() {
    const { type } = this.props;
    if (type && type !== "" && type !== undefined) {
      if (type === "email") {
        return (
          <View>
            <Image
              source={Email}
              style={{
                height: deviceHeight * 0.02,
                width: deviceWidth * 0.1
              }}
              resizeMode="contain"
            />
          </View>
        );
      }
      if (
        type === "password" ||
        type === "confirmPassword" ||
        type === "oldPassword"
      ) {
        return (
          <View>
            <Image
              source={Password}
              style={{
                height: deviceHeight * 0.025,
                width: deviceWidth * 0.1
              }}
              resizeMode="contain"
            />
          </View>
        );
      }
    }
  }

  checkType() {
    const { type } = this.props;
    if (type && type !== "" && type !== undefined) {
      return <View>{this.renderInputField()}</View>;
    }
  }

  errorDisplay() {
    const { error } = this.state;
    if (error !== "" && error !== undefined) {
      return (
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.passwordError}>{error}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        {this.checkType()}

        {this.errorDisplay()}
      </View>
    );
  }
}

export default FloatLabelTextField;
