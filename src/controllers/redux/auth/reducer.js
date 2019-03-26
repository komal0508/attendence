// import { REGISTER, _SUCCESS } from '../base/constants';
// //import { decryptPayload } from '../../utility/decryption';

// //const sha256 = require('sha256');

// const defaultState = {
//   userDetail: [],
// };

// /**
//  * @method getFormattedAuthData : To format result of authentication api (register and login).
//  */

// const getFormattedAuthData = (state, action) => {
//   console.log('Enter!!!!');
//   console.log('Action!!!!', action);
//   console.log('action!!!', action.payload);
//   console.log('!!!', action.payload.request.data);
//   if (action && action.payload) {
//     const { data } = action.payload;

//     if (data.status === 200) {
//       if (data.message) {
//         const userAuthData = data.message;
//        // const userAuthData = decryptPayload(data.message);
//         if (userAuthData.status === 'success' && userAuthData.payload) {
//           const { payload } = userAuthData;
//           if (payload) {
//             const {
//                 first_name,
//                 last_name,
//                 email,
//                 password,
//                 factory_name,
//                 contact,
//                 email_token,
//                 token_date,
//                 isVerified,
//             } = payload;

//             const userAuthDetails = {
//                 first_name,
//                 last_name,
//                 email,
//                 password,
//                 factory_name,
//                 contact,
//                 email_token,
//                 token_date,
//                 isVerified,
//             };

//             // if (jwt && jwt.token) {
//             //   userAuthDetails.xAccessToken = jwt.token;
//             // }
//             // if (email) {
//             //   const xKey = sha256(payload.email);
//             //   userAuthDetails.xKey = xKey;
//             // }
//             return Object.assign({}, state, {
//               userDetail: userAuthDetails,
//             });
//           }
//         }
//       }
//     }
//   }
//   return state;
// };

// /**
//  * @method userAuthReducer : Reducer for user authentication.
//  */
// const userAuthReducer = (state = defaultState, action) => {
//   console.log('Action in reducer !!!', action, state);
//   switch (action.type) {
//     case `${REGISTER}`: {
//       const formattedData = getFormattedAuthData(state, action);

//       return formattedData;
//     }
//     case `${REGISTER}${_SUCCESS}`: {
//       const formattedData = getFormattedAuthData(state, action);

//       return formattedData;
//     }
//     // case `${LOGIN}${_SUCCESS}`: {
//     //   const formattedData = getFormattedAuthData(state, action);
//     //   return formattedData;
//     // }
//     default:
//       return state;
//   }
// };

// export default userAuthReducer;

const defaultState = {
  registerRespData: null
};

const handlers = new class {
  REGISTER(state, action) {
    console.log("Enter!!!!", state, action);
    return state;
  }

  REGISTER_SUCCESS(state, action) {
    console.log("LOC_DATA_SUCCESS", action);

    const registerRespData = action.payload.data.result;
    return {
      registerRespData
    };
  }

  REGISTER_FAIL(state, action) {
    console.log("Enter!!!!", state, action);
    console.log("LOC_DATA_FAIL", action);
    return state;
  }
}();

function registerAdmin(state = defaultState, action) {
  console.log("Action and state!!", action, state);
  return handlers[action.type] ? handlers[action.type](state, action) : state;
}
export const getRegisterResp = state => state.registerRespData;

export default registerAdmin;
