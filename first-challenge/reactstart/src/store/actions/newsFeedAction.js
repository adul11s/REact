import axios from "axios";
const apiKey = "4ee3718da51b497a868ae709733953fa";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;

export const getNews = (category) => {
  return async (dispatch, getState) => {
    let url;
    if (category) {
      url = urlHeadline + "&category=" + category;
    } else {
      url = urlHeadline;
    }

    await axios
      .get(url)
      .then(async (response) => {
        dispatch({ type: "GET_LIST_NEWS", payload: response.data.articles });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
export const getData = (category) => {
  return async (dispatch, getState) => {
    const url = urlHeadline;
    await axios
      .get(url)
      .then(async (response) => {
        dispatch({ type: "GET_LATEST_NEWS", payload: response.data.articles });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getCategory = (category) => {
  return async (dispatch, getState) => {
    let url;
    url = urlHeadline + "&category=" + category;
    await axios
      .get(url)
      .then(async (response) => {
        dispatch({ type: "GET_CATEGORY", payload: response.data.articles });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getSearch = (keyword) => {
  return async (dispatch, getState) => {
    if (keyword.length > 2) {
      let url;
      url = baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey;
      await axios
        .get(url)
        .then(async (response) => {
          dispatch({ type: "GET_SEARCH", payload: response.data.articles });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
};

export const handleSearch = (event) => {
  return async (dispatch, getState) => {
    dispatch({ type: "HANDLE_SEARCH", payload: event.target.value });
    dispatch(getSearch(event.target.value));
  };
};
