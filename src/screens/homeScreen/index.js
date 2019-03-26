import React, { Component } from "react";

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

import StatusBar from "../../common/statusBar";
import TitleHeader from "../../common/titleHeader";
import { deviceWidth, deviceHeight } from "../../common/constants";
import DesignButton from "../../common/button";
//import ImagePicker from 'react-native-imagepicker';
import * as RegisterActions from "../../controllers/redux/auth/action";

import { register } from "../../controllers/api/auth";

import MahiLogo from "../../images/mahiLogo.jpeg";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.Container}>
        <StatusBar />
        <TitleHeader title="ATTENDENCE" iconName="keyboard-arrow-left" />
        <ScrollView
          style={styles.scrollViewStyle}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "flex-start" }}
        >
          <View
            style={{
              height: deviceHeight * 0.4,
              width: deviceWidth,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              resizeMode="cover"
              source={MahiLogo}
              style={{
                height: deviceHeight * 0.2,
                width: deviceWidth * 0.6,
                justifyContent: "center",
                alignItems: "center"
              }}
            />
          </View>
          <View style={{ marginTop: deviceHeight * 0.08, alignSelf: "center" }}>
            <DesignButton name="ADMIN" isClickable={true} />
          </View>
          <View style={{ marginTop: 10, alignSelf: "center" }}>
            <DesignButton name="MANAGER" isClickable={true} />
          </View>
          <View style={{ marginTop: 10, alignSelf: "center" }}>
            <DesignButton name="EMPLOYEE" isClickable={true} />
          </View>
          <View style={styles.emptyViewStyle} />
        </ScrollView>
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
export default HomeScreen;
