import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/layout";
import Form1 from "./components/Form/form";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "/", element: <Sidebar /> },
			{ path: "/form", element: <Form1 /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals();
