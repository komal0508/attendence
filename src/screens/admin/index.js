import React, { Component } from "react";
//import base64 from 'base-64';
//import utf8 from 'utf8';

import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
  ScrollView,
  Image
} from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
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

//import ImagePicker from 'react-native-imagepicker';
import * as RegisterActions from "../../controllers/redux/auth/action";

import { register } from "../../controllers/api/auth";

import MahiLogo from "../../images/mahiLogo.jpeg";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleGoBack = this.handleGoBack.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.inputEmail = React.createRef();
    this.inputPassword = React.createRef();
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
  }

  updateForm(value, type) {
    this.setState({ [type]: value });
  }

  validateFields(type) {
    const { email } = this.state;
    if (type === "email") {
      if (email !== "" && email !== undefined) {
        if (isEmailValid(email) === false) {
          Alert.alert("Invalid Email", invalidEmail);
          this.setState({
            email: ""
          });
          return invalid;
        }
      }
    }
    return valid;
  }

  handleUserLogin() {
    const { email, password } = this.state;
    // const { navigation } = this.props;
    // console.log('email && password', email, password);
  }

  handleForgotPassword() {
    const { navigation } = this.props;
    // if (navigation) {
    //   navigation.navigate('ResetPassword');
    // }
  }
  handleGoBack() {
    const { navigation } = this.props;
    if (navigation) {
      navigation.goBack();
    }
  }
  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.Container}>
        <StatusBar />
        <TitleHeader
          title="ADMIN"
          isBackArrow
          iconName="keyboard-arrow-left"
          onBtnPress={this.handleGoBack}
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
          </View>

          <View style={styles.emailTextFieldStyle}>
            <FloatLabelTextField
              type="email"
              inputType="email"
              valueType="email"
              placeholder="Enter Your Email"
              autoCorrect={false}
              value={email}
              updateForm={this.updateForm}
              inputBackgroundColor="#fff"
              validateFields={type => this.validateFields(type)}
              autoFocus
              ref={this.inputEmail}
              onSubmitEditing={() => this.inputPassword.current.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.passwordTextFieldStyle}>
            <FloatLabelTextField
              type="password"
              inputType="text"
              valueType="password"
              placeholder="Password"
              autoCorrect={false}
              value={password}
              updateForm={this.updateForm}
              inputBackgroundColor="#fff"
              validateFields={type => this.validateFields(type)}
              ref={this.inputPassword}
              onSubmitEditing={() => this.handleUserLogin()}
              blurOnSubmit={false}
            />
          </View>
          <View style={{ marginTop: deviceHeight * 0.08 }}>
            <DesignButton
              name="LOGIN"
              callMethod={() => this.handleUserLogin()}
              isClickable={true}
              btnMainStyle={styles.loginBtnStyle}
              btnTextColor={styles.loginBtnTextColor}
            />
          </View>
          <TouchableOpacity
            style={{ marginTop: deviceHeight * 0.03 }}
            onPress={this.handleForgotPassword}
          >
            <Text style={styles.textStyle}>Forgot Password</Text>
          </TouchableOpacity>
          <View style={styles.emptyViewStyle} />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
// const mapStateToProps = state => ({
//   // feeds: state.feedHome.feeds,
// });

// const mapActionsToProps = dispatch => ({
//  // register: data => dispatch(RegisterActions.register(data)),
// });

// export default connect(
//   mapStateToProps,
//   mapActionsToProps
// )(HomeScreen);
export default Admin;
