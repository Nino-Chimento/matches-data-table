import { queryByAttribute, render } from "@testing-library/react";
import { Counter } from "components/counter";
import { Provider } from "react-redux";
import { store } from "redux/store";
const getById = queryByAttribute.bind(null, "id");

it("counter test", () => {
  const view = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  const counter = getById(view?.container, "counter");
  expect(counter?.innerHTML).toEqual("0");
});

it("counter button change value counter", () => {
  const view = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  const buttonIncrement = getById(view?.container, "counter-increment");
  const buttonDecrement = getById(view?.container, "counter-decrement");
  const buttonReset = getById(view?.container, "counter-reset");
  buttonIncrement?.click();
  const counter = getById(view?.container, "counter");
  expect(counter?.innerHTML).toEqual("1");
  buttonDecrement?.click();
  expect(counter?.innerHTML).toEqual("0");
  buttonIncrement?.click();
  buttonIncrement?.click();
  expect(counter?.innerHTML).toEqual("2");
  buttonReset?.click();
  expect(counter?.innerHTML).toEqual("0");
});
