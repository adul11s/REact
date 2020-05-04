import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducer/loginReducer";

const rootReducer = combineReducers({
  user: loginReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
