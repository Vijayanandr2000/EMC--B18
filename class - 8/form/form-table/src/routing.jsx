import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>about</h1>} />
          <Route path="/contact" element={<h1>conatct</h1>} />

          {/* <Route path="*" element={<h1>Not found</h1>} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
            {/* <Link to="/about">About</Link> */}
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Routing;
