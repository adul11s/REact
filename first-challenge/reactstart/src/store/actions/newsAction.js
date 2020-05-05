import axios from "axios";
const apiKey = "4ee3718da51b497a868ae709733953fa";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;

export const getData = (props) => {
  return async (dispatch, getState) => {
    //   const bodyRequest = {
    //     username: getState().user.name,
    //     password: getState().user.sandi,
    //   };
    await axios
      .get(urlHeadline)
      .then(async (response) => {
        if (response.data) {
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data.articles });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
