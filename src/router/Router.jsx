import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import { auth } from "../firebase/firebaseConfig";
import DashBoardRouter from "./DashBoardRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import Spinner from "react-bootstrap/Spinner";
import Navigationbar from "../components/nav/Navigationbar";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [check, setCheck] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
        
      } else {
        setIsLoggedIn(false);
      }
      setCheck(false)
    }
    );
  }, [setIsLoggedIn]);

  if (check) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <BrowserRouter>
    <Navigationbar isAuthentication={isLoggedIn} />
      <Routes>
        <Route element={<PublicRouter isAuthentication={isLoggedIn} />}>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
          <Route path="/*" element={<DashBoardRouter />} />
        </Route>
        {/* <Route path="*" element={<Nomtach/>}/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
