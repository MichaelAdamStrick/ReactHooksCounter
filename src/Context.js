import React, { createContext, useReducer, useContext } from "react";

export const CountContext = createContext();
const initialState = { GlobalCount: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { GlobalCount: state.GlobalCount + 1 };
    case "decrement":
      return { GlobalCount: state.GlobalCount - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

export const useStore = () => useContext(CountContext);
