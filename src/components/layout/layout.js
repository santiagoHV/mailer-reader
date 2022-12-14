import React from "react";
import NavBar from "../navbar/navbar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

export default Layout;