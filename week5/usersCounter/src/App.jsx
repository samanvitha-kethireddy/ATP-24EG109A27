import './App.css';
import React, { useState } from "react";
import Users from "./components/Users";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  const handleAddUser = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Users onAddUser={handleAddUser} />
    </div>
  );
}

export default App;