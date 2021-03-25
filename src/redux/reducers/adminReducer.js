const initatialState = {
  admin: {},
};

const adminReducer = (state = initatialState, action) => {
  switch (action.type) {
    case "loggedIn":
      return { ...state, admin: action.payload };
    case "logout":
      return { ...state, admin: {} };
    default:
      return state;
  }
};

export default adminReducer;
