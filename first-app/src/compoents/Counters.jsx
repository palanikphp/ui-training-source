import React, { useState, useContext, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import useDocumentTitle from "../hooks/useDocumentTitle";

import CartContext from "../context/CartContext";
import FileUpload from "./FileUpload";

let arrayvalues = [2, 3, -1, 5];
let arrayvalues2 = [2, 3, -1, 5];

function Counters(props) {
  const initialCounters = [
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
    {
      id: 3,
      value: 0,
    },
    {
      id: 4,
      value: 0,
    },
  ];

  const [counters, setCounters] = useState(initialCounters);
  const [userName, setUserName] = useState("");
  const [cartContext, setCartContext] = useContext(CartContext);
  const reduxCartCount = useSelector((state) => state.cart.count);

  const dispatch = useDispatch();

  useDocumentTitle(`Your name ${userName}`);

  const findPositive = (values) => {
    return values.filter((value) => value > 0);
  };
  const findPostive = useMemo(() => findPositive(arrayvalues), []);
  const findPostive2 = useMemo(() => findPositive(arrayvalues2), []);

  //let arrayvalues2 = [2, 3, -1, 5, 7, -8];
  console.log(findPostive);
  console.log(findPostive);
  console.log(findPostive2);

  const handleAdd = (counterId) => {
    const newCounters = [...counters];
    const indexToUpdate = counters.findIndex(
      (counter) => counter.id === counterId
    );

    newCounters[indexToUpdate].value = newCounters[indexToUpdate].value + 1;

    setCounters(newCounters);
    setCartContext(cartContext + 1);

    dispatch({ type: "INCREMENT_CART_COUNT" });
  };

  const handleRemove = useCallback(
    (counterId) => {
      const newCounters = [...counters];
      const indexToUpdate = counters.findIndex(
        (counter) => counter.id === counterId
      );

      if (newCounters[indexToUpdate].value > 0) {
        newCounters[indexToUpdate].value = newCounters[indexToUpdate].value - 1;

        setCounters(newCounters);
        dispatch({ type: "DECREMENT_CART_COUNT" });
        setCartContext(cartContext - 1);
      }
    },
    [cartContext, counters, dispatch, setCartContext]
  );

  const handleDelete = useCallback(
    (counterId) => {
      let newCounters = [...counters];
      newCounters = newCounters.filter((counter) => counter.id !== counterId);

      const indexToDelete = counters.findIndex(
        (counter) => counter.id === counterId
      );

      setCartContext(cartContext - counters[indexToDelete].value);

      dispatch({
        type: "RECOMPUTE_CART_COUNT",
        newCount: reduxCartCount - counters[indexToDelete].value,
      });

      setCounters(newCounters);
    },
    [cartContext, counters, dispatch, setCartContext, reduxCartCount]
  );

  return (
    <div>
      <div className="mt-10 mb-10">
        <FileUpload />
      </div>
      {/* <input
        className="mt-10"
        type="text"
        name="userName"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        value={userName}
        placeholder="Enter your name"
      /> */}
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onDelete={handleDelete}
          counter={counter}
        />
      ))}
    </div>
  );
}

export default Counters;
