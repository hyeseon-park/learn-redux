import React from "react";
import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter);

  //useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increaseAsync());
  const onDecrease = () => dispatch(decreaseAsync());

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
