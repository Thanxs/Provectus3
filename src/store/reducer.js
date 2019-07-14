const initialState = {
  menu: [],
  filter: "all"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MENU":
      return {
        ...state,
        menu: [...action.data]
      };

    case "CHANGE_FILTER":
      return {
        ...state,
        filter: action.filter
      };

    default:
      return {
        ...state
      };
  }
};

export default reducer;
