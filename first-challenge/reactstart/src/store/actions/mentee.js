export const chooseMentee = (name) => {
  return {
    type: "CHOOSE_MENTEE",
    payload: name,
  };
};

export const addMentee = (name) => {
  return {
    type: "ADD_MENTEE",
    payload: name,
  };
};
export const resetState = () => {
  console.log("ressseett");
  return {
    type: "RESET_STATE",
  };
};
