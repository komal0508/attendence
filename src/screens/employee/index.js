import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles";
import StatusBar from "../../common/statusBar";
import TitleHeader from "../../common/titleHeader";
import TitleCard from "../../common/titleCard";
import Email from "../../images/Email.png";
import Delete from "../../images/Delete.png";
import Edit from "../../images/Edit.png";
import { deviceWidth, deviceHeight } from "../../common/constants";
import Filter from "../../images/Filter.png";
import Notification from "../../images/Notification.png";

const empArray = [
  { name: "Komal", empId: "1" },
  { name: "Chirag Arora", empId: "2" },
  { name: "Komal Mittal", empId: "3" },
  { name: "Sam", empId: "4" },
  { name: "Deepak", empId: "5" },
  { name: "Sunil", empId: "6" },
  { name: "Maninder", empId: "7" },
  { name: "Radhika", empId: "8" },
  { name: "Gaurav", empId: "9" }
];

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.selectCard = this.selectCard.bind(this);
  }

  selectCard() {}

  renderTitleCard = ({ item }) => (
    <TitleCard
      icon={Email}
      titleCardMainViewStyle={styles.titleCardMainViewStyle}
      titleCardImageStyle={styles.titleCardImageStyle}
      titleCardTextStyle={styles.titleCardTextStyle}
      titleCardHeadingStyle={styles.titleCardHeadingStyle}
      titleMaterialTopIconStyle={styles.titleMaterialTopIconStyle}
      titleMaterialBottomIconStyle={styles.titleMaterialBottomIconStyle}
      name={item.name}
      empId={item.empId}
      onPress={this.selectCard}
      rightTopIcon={Edit}
      rightBottomIcon={Delete}
      imageTopViewStyle={{ alignItems: "center" }}
      imageBottomViewStyle={{ alignItems: "center" }}
      childViewStyle={styles.childViewStyle}
    />
  );

  render() {
    return (
      <View style={styles.Container}>
        <StatusBar />
        <TitleHeader
          title="EMPLOYEE LIST"
          isBackArrow
          iconName="keyboard-arrow-left"
          onBtnPress={this.handleGoBack}
          rightFirstIconName={Notification}
          rightSecondIconName={Filter}
          rightIconType="ImageIconType"
          isRightDoubleIcon={true}
        />
        <FlatList
          style={{ marginTop: deviceHeight * 0.015 }}
          showsVerticalScrollIndicator={false}
          data={empArray}
          renderItem={this.renderTitleCard}
        />
        <View style={styles.bottomButtonStyle}>
          <TouchableOpacity style={{ justifyContent: "center" }}>
            <Text style={styles.buttonStyle}>Sort</Text>
          </TouchableOpacity>

          <View style={styles.seperator} />
          <TouchableOpacity style={{ justifyContent: "center" }}>
            <Text style={styles.buttonStyle}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Employee;
