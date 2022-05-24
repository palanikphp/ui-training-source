import React, { useState, useContext } from "react";
import Counter from "./Counter";

import CartContext from "../context/CartContext";

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
  const [cartContext, setCartContext] = useContext(CartContext);

  const handleAdd = (counterId) => {
    const newCounters = [...counters];
    const indexToUpdate = counters.findIndex(
      (counter) => counter.id === counterId
    );

    newCounters[indexToUpdate].value = newCounters[indexToUpdate].value + 1;

    setCounters(newCounters);

    setCartContext(cartContext + 1);
  };

  const handleRemove = (counterId) => {
    const newCounters = [...counters];
    const indexToUpdate = counters.findIndex(
      (counter) => counter.id === counterId
    );

    if (newCounters[indexToUpdate].value > 0) {
      newCounters[indexToUpdate].value = newCounters[indexToUpdate].value - 1;

      setCounters(newCounters);
      setCartContext(cartContext - 1);
    }
  };

  const handleDelete = (counterId) => {
    let newCounters = [...counters];
    newCounters = newCounters.filter((counter) => counter.id !== counterId);

    const indexToDelete = counters.findIndex(
      (counter) => counter.id === counterId
    );

    setCartContext(cartContext - counters[indexToDelete].value);
    setCounters(newCounters);
  };

  return (
    <div>
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
