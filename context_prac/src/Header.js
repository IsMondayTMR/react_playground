import React,{useContext} from "react"
import {nameContext} from "./Contexxt"

function Header() {
    const obj = useContext(nameContext)
    return (

        <header>
                    <p>Welcome, {obj.name}!</p>
        </header>
    )
}

export default Header
