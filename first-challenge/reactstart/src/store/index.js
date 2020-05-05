import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducer/loginReducer";
import newsFeedReducer from "./reducer/newsFeedReducer";

const rootReducer = combineReducers({
  user: loginReducer,
  newsFeed: newsFeedReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
