import React, { Component } from "react";
import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StatusBar from "../../common/statusBar";
import TitleHeader from "../../common/titleHeader";
import DesignButton from "../../common/button";
import FloatLabelTextField from "../../common/floatingLabelTextfield";
import { isEmailValid } from "../../utility/index";
import {
  deviceWidth,
  deviceHeight,
  invalid,
  valid,
  invalidEmail
} from "../../common/constants";
import MahiLogo from "../../images/mahiLogo.jpeg";
import Save from "../../images/Save.png";
import Cancel from "../../images/Cancel.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empId: "",
      contact: "",
      salary: "",
      jobType: "",
      fixedValue: "",
      randomValue: "",
      shiftTime: ""
    };
    this.handleGoBack = this.handleGoBack.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.inputEmpId = React.createRef();
    this.inputContact = React.createRef();
    this.inputJobType = React.createRef();
    this.inputShiftTime = React.createRef();
    this.inputFixedValue = React.createRef();
    this.inputRandomValue = React.createRef();
    this.inputSalary = React.createRef();
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
  }

  updateForm(value, type) {
    this.setState({ [type]: value });
  }

  // validateFields(type) {
  //   const { email } = this.state;
  //   if (type === "email") {
  //     if (email !== "" && email !== undefined) {
  //       if (isEmailValid(email) === false) {
  //         Alert.alert("Invalid Email", invalidEmail);
  //         this.setState({
  //           email: ""
  //         });
  //         return invalid;
  //       }
  //     }
  //   }
  //   return valid;
  // }

  handleUserLogin() {}

  handleForgotPassword() {}
  handleGoBack() {
    const { navigation } = this.props;
    if (navigation) {
      navigation.goBack();
    }
  }
  render() {
    const {
      empId,
      salary,
      shiftTime,
      fixedValue,
      randomValue,
      jobType,
      contact
    } = this.state;
    return (
      <View style={styles.Container}>
        <StatusBar />
        <TitleHeader
          title="EDIT"
          isBackArrow
          iconName={Cancel}
          leftIconType="ImageIconType"
          onBtnPress={this.handleGoBack}
          rightFirstIconName={Save}
          rightIconType="ImageIconType"
        />
        <KeyboardAwareScrollView
          style={styles.scrollViewStyle}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <View
            style={{
              height: deviceHeight * 0.3,
              width: deviceWidth,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                backgroundColor: "rgb(128, 0, 0)",
                height: 100,
                width: 100,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                resizeMode="contain"
                source={MahiLogo}
                style={{ height: 50, width: 80 }}
              />
            </View>
            <Text
              style={{
                color: "rgb(128, 0, 0)",
                fontSize: 16,
                fontFamily: "Roboto-Medium",
                marginTop: deviceHeight * 0.01
              }}
            >
              Hello
            </Text>
          </View>

          <View style={styles.emailTextFieldStyle}>
            <FloatLabelTextField
              type="empId"
              inputType="text"
              valueType="text"
              placeholder="Emp Id"
              autoCorrect={false}
              value={empId}
              updateForm={this.updateForm}
              inputBackgroundColor="#fff"
              // validateFields={type => this.validateFields(type)}
              autoFocus
              ref={this.inputEmpId}
              onSubmitEditing={() => this.inputContact.current.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.passwordTextFieldStyle}>
            <FloatLabelTextField
              type="contact"
              inputType="number"
              valueType="number"
              placeholder="Contact"
              autoCorrect={false}
              value={contact}
              updateForm={this.updateForm}
              inputBackgroundColor="#fff"
              // validateFields={type => this.validateFields(type)}
              ref={this.inputContact}
              onSubmitEditing={() => this.inputSalary.current.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.passwordTextFieldStyle}>
            <FloatLabelTextField
              type="salary"
              inputType="number"
              valueType="number"
              placeholder="Salary"
              autoCorrect={false}
              value={salary}
              updateForm={this.updateForm}
              inputBackgroundColor="#fff"
              //sdfsd validateFields={type => this.validateFields(type)}
              ref={this.inputSalary}
              onSubmitEditing={() => this.inputJobType.current.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.passwordTextFieldStyle}>
            <FloatLabelTextField
              type="jobType"
              inputType="text"
              valueType="text"
              placeholder="Job Type"
              autoCorrect={false}
              value={jobType}
              updateForm={this.updateForm}
              inputBackgroundColor="#fff"
              // validateFields={type => this.validateFields(type)}
              ref={this.inputJobType}
              onSubmitEditing={() => this.inputFixedValue.current.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.passwordTextFieldStyle}>
            <FloatLabelTextField
              type="fixedValue"
              inputType="number"
              valueType="number"
              placeholder="Fixed Value"
              autoCorrect={false}
              value={fixedValue}
              updateForm={this.updateForm}
              inputBackgroundColor="#fff"
              // validateFields={type => this.validateFields(type)}
              ref={this.inputFixedValue}
              onSubmitEditing={() => this.inputRandomValue.current.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.passwordTextFieldStyle}>
            <FloatLabelTextField
              type="randomValue"
              inputType="number"
              valueType="number"
              placeholder="Random Value"
              autoCorrect={false}
              value={randomValue}
              updateForm={this.updateForm}
              inputBackgroundColor="#fff"
              //validateFields={type => this.validateFields(type)}
              ref={this.inputRandomValue}
              onSubmitEditing={() => this.inputShiftTime.current.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.passwordTextFieldStyle}>
            <FloatLabelTextField
              type="shiftTime"
              inputType="number"
              valueType="number"
              placeholder="Shift Time"
              autoCorrect={false}
              value={shiftTime}
              updateForm={this.updateForm}
              inputBackgroundColor="#fff"
              //validateFields={type => this.validateFields(type)}
              ref={this.inputShiftTime}
              onSubmitEditing={() => this.handleUserLogin()}
              blurOnSubmit={false}
            />
          </View>
          <View style={{ marginTop: deviceHeight * 0.05 }}>
            <DesignButton
              name="Edit"
              callMethod={() => this.handleUserLogin()}
              isClickable={true}
              btnMainStyle={styles.loginBtnStyle}
              btnTextColor={styles.loginBtnTextColor}
            />
          </View>

          <View style={styles.emptyViewStyle} />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default Register;
