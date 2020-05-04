import axios from "axios";

export const doLogin = (props) => {
  console.log("cek masuk");
  return async (dispatch, getState) => {
    const bodyRequest = {
      username: getState().user.name,
      password: getState().user.sandi,
    };
    await axios
      .post("https://aduka11.free.beeceptor.com/login", bodyRequest)
      .then(async (response) => {
        if (response.data.hasOwnProperty("api_key")) {
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const changeInputUser = (el) => {
  return {
    type: "CHANGE_INPUT_USER",
    payload: el,
  };
};
export const doLogout = (el) => {
  return {
    type: "LOG_OUT",
    payload: el,
  };
};
