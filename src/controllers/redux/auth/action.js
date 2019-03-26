// import action from '../../redux/base/actionHeader/action';
// import * as actions from '../base/constants';

// /**
//  * @method registerUser : Action for register api.
//  * @param {object} data : Encrypted data for user registeration.
//  */
// export const registerUser = data =>
//   action({
//     type: actions.REGISTER,
//     payload: {
//       request: {
//         url: actions.registerUrl,
//         method: 'POST',
//         data,
//       },
//     },
//   });

export const register = data => ({
  type: "REGISTER",
  payload: {
    request: {
      url: "register-admin",
      method: "POST",
      data
    }
  }
});
