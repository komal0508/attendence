import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

import config from "../controllers/config";
import rootReducer from "../controllers/index";
/**
 * Create Axios Client to communicate
 * with JustplayTV API
 */
const axiosClient = axios.create({
  baseURL: config.apiUrl,
  responseType: "json"
});

// Store instance
export let store = null;
export let persistor = null;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "connect"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Create the Redux store
 */
export const configureStore = () => {
  store = createStore(
    persistedReducer,
    applyMiddleware(reduxThunk, axiosMiddleware(axiosClient))
  );

  persistor = persistStore(store);

  return { store, persistor };
};

/**
 * Get store
 */
export const getStore = () => store;

/**
 * Get persistor
 */
export const getPersistor = () => persistor;

/**
 * Dispatch an action
 */
export const dispatch = (...args) => store.dispatch(...args);

export default {
  dispatch,
  getStore,
  configureStore
};
