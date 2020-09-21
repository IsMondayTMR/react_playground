import React from "react"
import Context from "./Contexxt"

function Header() {
    return (
        <header>
            <Context.Consumer>
                {username => (
                    <p>Welcome, {username}!</p>
                )}
            </Context.Consumer>

        </header>
    )
}

export default Header
