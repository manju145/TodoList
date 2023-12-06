import React from "react";
import TodoList from "./components/TodoList";
// import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Homenav";
import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
 
return (
         <div className="App">
            <BrowserRouter>
          <NavBar/>

    {/* <Router> */}
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
      
        </Routes>
      {/* </Router> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
