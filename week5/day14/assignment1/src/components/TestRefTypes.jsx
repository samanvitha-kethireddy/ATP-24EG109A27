import { useState } from "react";

function TestRefTypes() {
  const [user, setUser] = useState({ username: "ram", age: 19, city: "hyd" });
  const [marks, setMarks] = useState([10, 20, 30]);

  const updateUser = () => {
    setUser({ ...user, username: "seetha" });
  };

  const updateMarks = () => {
    setMarks([...marks, 40]);
  };

  return (
    <div
      style={{ padding: "20px", alignItems: "center", justifyContent: "center" }}
    >
      <p>Username: {user.username}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <button onClick={updateUser} style={{padding: "10px 20px",borderRadius: "5px",margin: "10px" }}>
        Update User
      </button>

      <ul>
        {marks.map((m, index) => (
          <li key={index}>{m}</li>
        ))}
      </ul>
      <button onClick={updateMarks} style={{padding: "10px 20px",borderRadius: "5px",margin: "10px"}}>
        Update Mark
      </button>
    </div>
  );
}

export default TestRefTypes;