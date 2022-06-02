import React, { useContext, useState } from "react";
import Counter from "./Counter";
import CartContext from "../context-existing/CartContext";

function Counters(props) {
  const [cartContext, setCartContext] = useContext(CartContext);
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleAdd = (counterId) => {
    const newCounters = [...counters];
    const indexToUpdate = newCounters.findIndex(
      (element) => element.id === counterId
    );
    newCounters[indexToUpdate] = {
      ...newCounters[indexToUpdate],
      value: newCounters[indexToUpdate].value + 1,
    };

    setCartContext({ currentCount: cartContext.currentCount + 1 });

    setCounters(newCounters);
  };

  const handleRemove = (counterId) => {
    const newCounters = [...counters];
    const indexToUpdate = newCounters.findIndex(
      (counter) => counter.id === counterId
    );

    if (newCounters[indexToUpdate].value > 0) {
      newCounters[indexToUpdate] = {
        ...newCounters[indexToUpdate],
        value: newCounters[indexToUpdate].value - 1,
      };

      setCartContext({ currentCount: cartContext.currentCount - 1 });
      setCounters(newCounters);
    }
  };

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((counter) => counter.id !== counterId);

    const counterToRemove = counters.find(
      (counter) => counter.id === counterId
    );

    setCartContext({
      currentCount: cartContext.currentCount - counterToRemove.value,
    });

    setCounters(newCounters);
  };

  return (
    <div>
      {counters.map((counter) => (
        <div className="block">
          <Counter
            id={counter.id}
            value={counter.value}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onDelete={handleDelete}
          />
        </div>
      ))}
      <div className="block w-9/12 m-auto">
        <button class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-800">
          <span class="mr-2">RESET</span>
        </button>
      </div>
    </div>
  );
}

export default Counters;
