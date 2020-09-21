import React from "react"
import ReactDOM from "react-dom"
import Context from "./Contexxt"
import App from "./App"


ReactDOM.render(
    <Context.Provider value = "bobx">
        <App />
    </Context.Provider>,
    document.getElementById("root")
)
