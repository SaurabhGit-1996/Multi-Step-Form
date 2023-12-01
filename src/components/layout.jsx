import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Sidebar />
		</>
	);
};

export default Layout;
