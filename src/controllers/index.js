// import { combineReducers } from "redux";
// import userAuthReducer from './redux/auth/reducer';

// const rootReducer = combineReducers({
//   userAuthReducer,
// });

// export default rootReducer;

import { combineReducers } from "redux";
// import auth, * as FromAuth from './auth';
// import feedTopics, * as FromFeedTopics from './feedTopics';
// import feedHome, * as FromFeedHome from './feedHome';
// import connect, * as FromConnect from './connect';
import registerAdmin, * as FromRegisterAdmin from "./redux/auth/reducer";
// import videoInfo, * as FromVideoInfo from './videoInfo';
// import videoMetaInfo, * as FromVideoMetaInfo from './videoInfo';
// import videoFrameContent, * as FromVideoFrameContent from './videoInfo';
// import analyticsData, * as FromAnalytics from './analytics';

// Combine all the reducers
const rootReducer = combineReducers({
  // auth,
  // feedTopics,
  // feedHome,
  // connect,
  registerAdmin
  // videoInfo,
  // analyticsData
});

// export const isAuthenticated = ({ auth }) => FromAuth.isAuthenticated(auth);
// export const getFeedTopics = ({ feedMenu }) => FromFeedTopics.getFeedTopics(feedMenu);
// export const getFeed = ({ feedHome }) => FromFeedHome.getFeed(feedHome);
// export const getConnectData = ({ connect }) => FromConnect.getConnectData(connect);
// export const getAuthUser = ({ auth }) => FromAuth.getUser(auth);
// export const getToken = ({ auth }) => FromAuth.getToken(auth);
export const getRegisterResp = ({ registerAdmin }) =>
  FromRegisterAdmin.getRegisterResp(registerAdmin);
// export const getVideoInfo = ({ videoInfo }) => FromVideoInfo.getVideoInfo(videoInfo);
// export const getVideoMetaInfo = ({ videoMetaInfo }) => FromVideoMetaInfo.getVideoFrame(videoInfo);
// export const getVideoFrameContent = ({ videoFrameContent }) => (FromVideoFrameContent.getVideoFrame(videoFrameContent));
// export const getAnalyticsData = ({ analyticsData }) => FromAnalytics.getAnalyticsData(analyticsData);

export default rootReducer;
