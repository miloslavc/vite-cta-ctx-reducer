import React from 'react';

export const CountContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'INCREMENT_FIVE':
      return { count: state.count + 5 };
    case 'INCREMENT_NUM':
      return { count: state.count + action.num };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'DECREMENT_FIVE':
      return { count: state.count - 5 };
    case 'DECREMENT_NUM':
      return { count: state.count - action.num };
    default:
      return state;
  }
};

const StoreContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CountContext.Provider>
  );
};

export default StoreContextProvider;
