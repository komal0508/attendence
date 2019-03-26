import React, { Component } from "react";
import { View, Text, TouchableOpacity,Platform, Alert, ScrollView, Image } from "react-native";
import styles from "./styles";
import StatusBar from '../../common/statusBar';
import TitleHeader from '../../common/titleHeader';
import TitleCard from '../../common/titleCard';
import Email from '../../images/Email.png';
import DesignButton from '../../common/button'; 
import FloatLabelTextField from '../../common/floatingLabelTextfield';
import Delete from '../../images/Delete.png';
import Edit from '../../images/Edit.png';
import { deviceWidth, deviceHeight, invalid, valid, invalidEmail } from '../../common/constants';
import Filter from '../../images/Filter.png';
import Notification from '../../images/Notification.png';

const empArray = [
    { name: 'Komal',
      empId: '1',
    },
    { name: 'Chirag Arora',
    empId: '2',
  },
  { name: 'Komal Mittal',
  empId: '3',
},
{ name: 'Sam',
empId: '4',
},
{ name: 'Deepak',
empId: '5',
},
{ name: 'Sunil',
empId: '6',
},
{ name: 'Maninder',
empId: '7',
},
{ name: 'Radhika',
empId: '8',
},
];

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
    };
    this.toggleWalletList = this.toggleWalletList.bind(this);

  }

  
  toggleWalletList() {
    // const { openWalletList } = this.state;
    // this.setState({
    //   openWalletList: !openWalletList,
    // });
  }
  renderTitleCard() {
    return  empArray.map((data, index) => (
            <TitleCard
            icon={Email}
            titleCardMainViewStyle={styles.titleCardMainViewStyle}
            titleCardImageStyle={styles.titleCardImageStyle}
            titleCardTextStyle={styles.titleCardTextStyle}
            titleCardHeadingStyle={styles.titleCardHeadingStyle}
            titleMaterialTopIconStyle={styles.titleMaterialTopIconStyle}
            titleMaterialBottomIconStyle={styles.titleMaterialBottomIconStyle}
            name={data.name}
            empId={data.empId}
            onPress={this.toggleWalletList}
            rightTopIcon={Edit}
            rightBottomIcon={Delete}
            imageTopViewStyle={{alignItems: 'center'}}
            imageBottomViewStyle={{alignItems: 'center'}}
            childViewStyle={styles.childViewStyle}
          />
          
      ));
  }

  render() {
    const { email, password } = this.state;
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
        <ScrollView
          style={styles.scrollViewStyle}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center' }}
          >
          <View style={{width: deviceWidth,  marginTop: deviceHeight * 0.05,}}>
           {this.renderTitleCard()}
          </View>
          
      <View style={styles.emptyViewStyle} />
      </ScrollView>
      <View style={{ 
      width: deviceWidth, 
      justifyContent: 'space-between', 
      alignItems: 'center',
       margin: deviceHeight * 0.01,
       width: deviceWidth * 0.8, 
       height: deviceHeight * 0.06,
       backgroundColor: 'rgb(128, 0, 0)',
        borderRadius: 5,
       flexDirection: 'row',
        }}>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>
      </View>

    );
  }
}

export default Employee;
