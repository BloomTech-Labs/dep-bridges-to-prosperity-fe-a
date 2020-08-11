import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../../state/actions';
import Mapbox from './Mapbox';

function HomeContainer() {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.counter);

  return (
    <div>
      <h1>Bridges To Prosperity</h1>
      <Mapbox />
      {/* not sure if I should remove this or not? */}
      <div className="counter">
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <div className="count">{count}</div>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </div>
  );
}

export default HomeContainer;
