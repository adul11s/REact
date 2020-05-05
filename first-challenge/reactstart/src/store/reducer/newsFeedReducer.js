const initialState = {
  latestNews: [],
  newsFeed: [],
  isLoading: true,
  search: "",
};

export default function newsFeedReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_LIST_NEWS":
      return {
        ...state,
        newsFeed: action.payload,
      };
    case "GET_LATEST_NEWS":
      return {
        ...state,
        latestNews: action.payload,
      };
    case "GET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_CATEGORY":
      return {
        ...state,
        newsFeed: action.payload,
      };
    case "GET_SEARCH":
      return {
        ...state,
        newsFeed: action.payload,
      };
    case "HANDLE_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
}
