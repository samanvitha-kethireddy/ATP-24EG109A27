import React from "react";

const Counter = ({ count }) => {
  return (
    <div className="text-center my-4">
      <h2 className="text-xl font-semibold">User Count: {count}</h2>
    </div>
  );
};

export default Counter;