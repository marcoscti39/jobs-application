import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="jobs" element={<Header />}>
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="edit/:jobPosition/:userID/:jobID" element={<Edit />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
