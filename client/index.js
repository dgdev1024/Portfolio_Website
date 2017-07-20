///
/// \file   index.js
/// \brief  The entry point for our application's backend.
///

// Imports
import React from "react";
import ReactDOM from "react-dom";
import App from "./js/components/app";
import "./scss/main.scss";

// Render
ReactDOM.render(
    <App />,
    document.getElementById("content")
);