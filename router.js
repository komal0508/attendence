import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./src/screens/homeScreen";
//import Camera from './src/screens/Camera/index';
import Admin from "./src/screens/admin/index";
import Login from "./src/screens/login/index";
import Employee from "./src/screens/employee/index";

const Routing = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    // Camera: {
    //   screen: Camera
    // },
    Admin: {
      screen: Admin
    },
    Login: {
      screen: Login
    },
    Employee: {
      screen: Employee
    }
  },
  {
    initialRouteName: "Employee",
    headerMode: "none",
    mode: "card",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);
const AppContainer = createAppContainer(Routing);

const Router = () => <AppContainer />;

export default Router;
