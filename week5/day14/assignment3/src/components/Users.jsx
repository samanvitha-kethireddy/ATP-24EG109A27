import React, { useEffect, useState } from "react";

const Users = ({ onAddUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data)); // show all users
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6">
      {users.map(user => (
        <div
          key={user.id}
          className="border rounded-lg shadow-md p-4 text-center"
        >
          <h3 className="font-bold">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.email}</p>
          <button
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onAddUser}
          >
            Add User
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users;