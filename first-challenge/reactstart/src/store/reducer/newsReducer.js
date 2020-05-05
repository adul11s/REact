initialState = {
  data: [],
  newsFeed: [],
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
      };
  }
}
