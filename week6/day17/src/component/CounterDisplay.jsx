import { useCounter } from "../CounterContext";

const CounterDisplay = ({ label }) => {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="bg-pink-200 w-72 h-48 flex flex-col items-center justify-center gap-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">{label}: {count}</h2>
      <div className="flex gap-6">
        <button
          onClick={increment}
          className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CounterDisplay;