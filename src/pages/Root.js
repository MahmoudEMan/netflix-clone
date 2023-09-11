import React, { useEffect, useState } from "react";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

import {
  Outlet,
  ScrollRestoration,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

const Root = () => {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(isNonMobile);
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  // const loggedIn = false;

  useEffect(() => {
    if (isAuth && location.pathname === "/login") {
      navigate("/");
    } else if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  return (
    <Box width={"100%"} height={"100%"}>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isAuth={isAuth}
      ></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
      <ScrollRestoration />
    </Box>
  );
};

export function action() {
  // const navigate = useNavigate();
  // navigate("/products");
}

export default Root;
