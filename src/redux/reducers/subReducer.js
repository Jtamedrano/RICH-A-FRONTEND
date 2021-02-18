const initatialState = {
  currentSubscriber: {},
};

const subReducer = (state = initatialState, action) => {
  switch (action.type) {
    case 'ADD_SUBSCRIBER':
      return { ...state, currentSubscriber: action.payload };
    default:
      return state;
  }
};

export default subReducer;
