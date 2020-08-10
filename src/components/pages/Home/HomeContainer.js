import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../../state/actions';
import Mapbox from './Mapbox';

function HomeContainer() {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.counter);

  return (
    <div>
      <h1>Home page redux + hooks example</h1>
      <Mapbox />
      <div className="counter">
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <div className="count">{count}</div>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </div>
  );
}

export default HomeContainer;
