import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/actions";
import { selectorCounter } from "../redux/selector";

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectorCounter);

  return (
    <>
      <div className="w-100 d-flex justify-content-between p-3">
        <button
          className="btn btn-success"
          onClick={() => dispatch(increment(1))}
        >
          add
        </button>
        <button className="btn btn-info" onClick={() => dispatch(decrement(1))}>
          decrement
        </button>
        <button className="btn btn-danger" onClick={() => dispatch(reset())}>
          reset
        </button>
      </div>
      <div className="text-center">{counter}</div>
    </>
  );
};
