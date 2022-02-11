import { createContext, useReducer } from "react";
import appReducer from "../reducers/appReducer";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  students: [],
  user: {},
};
export const AppContext = createContext();
export const DispatchContext = createContext();

export function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </AppContext.Provider>
  );
}
