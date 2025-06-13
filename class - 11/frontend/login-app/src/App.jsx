import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [messasge, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user);

    const response = await fetch("http://localhost:8080/signup", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resData = await response.json();

    if (response.ok) {
      setMessage({
        status: "success",
        message: resData.message,
      });
      return;
    }

    setMessage({
      status: "error",
      message: resData.message,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {messasge?.status && (
        <h2 className={messasge.status}>{messasge.message}</h2>
      )}
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => {
          setUser({
            ...user,
            email: e.target.value,
          });
        }}
      />
      <br />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => {
          setUser({
            ...user,
            password: e.target.value,
          });
        }}
      />
      <br />

      <button type="submit">SignUp</button>
    </form>
  );
};

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
