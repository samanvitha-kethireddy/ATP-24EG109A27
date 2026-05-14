import { useCounter } from "../CounterContext";

const CounterButton = ({ action, label }) => {
  const { increment, decrement, reset } = useCounter();

  const actions = {
    increment,
    decrement,
    reset,
  };

  return (
    <button
      onClick={actions[action]}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {label}
    </button>
  );
};

export default CounterButton;