export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SER_USER",
};

const reducer = (state, action) => {
  console.log(action.user);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
