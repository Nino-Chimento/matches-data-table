import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, increment, reset } from "../redux/actions";
import { selectorCounter } from "../redux/selector";

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectorCounter);

  return (
    <>
      <div className="w-100 d-flex justify-content-between p-3">
        <button
          id="counter-increment"
          className="btn btn-success"
          onClick={() => dispatch(increment(1))}
        >
          add
        </button>
        <button
          id="counter-decrement"
          className="btn btn-info"
          onClick={() => dispatch(decrement(1))}
        >
          decrement
        </button>
        <button
          id="counter-reset"
          className="btn btn-danger"
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
      </div>
      <div className="text-center" id="counter">
        {counter}
      </div>
    </>
  );
};
