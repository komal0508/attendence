import React, { Component } from "react";
import { Provider } from "react-redux";
import Router from "../router";
import { configureStore } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("123");
  }

  render() {
    console.log("23");
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
