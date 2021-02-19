const sub = JSON.parse(window.localStorage.getItem("sub")) || null;

const initatialState = {
  currentSubscriber: sub,
};

const subReducer = (state = initatialState, action) => {
  switch (action.type) {
    case "ADD_SUBSCRIBER":
      return { ...state, currentSubscriber: action.payload };
    case "SIGNOUT_SUBSCRIBER":
      window.localStorage.removeItem("sub");
      return { ...state, currentSubscriber: {} };
    default:
      return state;
  }
};

export default subReducer;
