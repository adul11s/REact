const initialState = {
  fullName: "",
  email: "",
  apiKey: "",
  isLogin: false,
  nama: "",
  sandi: "",
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_LOGIN":
      return {
        ...state,
        fullName: action.payload.fullName,
        email: action.payload.email,
        apiKey: action.payload.apiKey,
        isLogin: true,
      };
    case "LOG_OUT":
      return {
        isLogin: false,
      };
    default:
      return state;
  }
}
