const appReducer = (state, action) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        isLoading: true,
        ...state,
      };
    case "STOP_LOADING":
      return {
        isLoading: false,
        ...state,
      };
    case "SET_USER":
      console.log("SETUSER", action.payload)
      return {
        ...state,
        isAuthenticated:true,
        user: action.payload,
        isLoading: false
      };
      case "SET_STUDENTS":
      return {
        ...state,
        students: action.payload
      }

    default:
      return state;
  }
};
export default appReducer;
