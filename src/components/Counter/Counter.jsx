import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from 'components/Counter/counterSlice';
import styles from './Counter.module.scss';

const Counter = () => {
  const count = useSelector(({counter}) => counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
