import React, { useEffect, useState } from "react";

const Form = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;

    let newUser = {
      ...user,
      [key]: value,
    };

    setUser(newUser);

    console.log(newUser);
  };

  const handleClick = () => {
    users.push(user);
    setUsers([...users]);
  };

  useEffect(() => {
    console.log("users2", users);
  }, [users]);

  return (
    <>
      <h1>Form</h1>
      <div>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="father name"
          name="fatherName"
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleClick}>Add</button>
      </div>

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Fathers Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => {
            return (
              <tr key={idx}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.fatherName}</td>
                <td>
                  <button
                    onClick={() => {
                      users.splice(idx, 1);
                      setUsers([...users]);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Form;
