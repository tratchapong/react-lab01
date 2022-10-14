// Best useEfect + RestrictMode + Cleanup example from LamaDev (Youtube)
// resource : https://www.youtube.com/watch?v=QQYeipc_cik


// import axios from "axios";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import User from "./User";


function App() {
  return (       
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
