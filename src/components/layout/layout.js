import React from "react";
import NavBar from "../navbar/navbar";
import { Outlet } from "react-router-dom";

const Layout = ({ loginData }) => {
    return (
        <>
            <NavBar loginData={loginData}/>
            <Outlet />
        </>
    );
}

export default Layout;