import CounterDisplay from "./CounterDisplay";

const CounterControls = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <CounterDisplay label="Counter 1" />
      <CounterDisplay label="Counter 2" />
      <CounterDisplay label="Counter 3" />
      <CounterDisplay label="Counter 4" />
    </div>
  );
};

export default CounterControls;