import React, { useContext } from 'react';
import { CountContext } from '../store/count-context';

const Count = () => {
  const { state, dispatch } = useContext(CountContext);
  return (
    <div>
      <button type="button" onClick={() => dispatch({ type: 'INCREMENT' })}>
        + 1
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'INCREMENT_FIVE' })}
      >
        + 5
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'INCREMENT_NUM', num: 7 })}
      >
        + 7
      </button>
      <div>{state.count}</div>

      <button type="button" onClick={() => dispatch({ type: 'DECREMENT' })}>
        - 1
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'DECREMENT_FIVE' })}
      >
        - 5
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'DECREMENT_NUM', num: 7 })}
      >
        - 7
      </button>
    </div>
  );
};

export default Count;
