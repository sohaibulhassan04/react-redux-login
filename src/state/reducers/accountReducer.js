export const reducer = (state = { username: "", password: "" }, action) => {
  if (action.type === "signin") {
    return action.payload;
  } else if (action.type === "signup") {
    return {
      username: action.payload.username,
      password: action.payload.password,
    };
  } else if (action.type === "signout") {
    return { username: "", password: "" };
  } else {
    return state;
  }
};

export default reducer;
