import React from "react"
import {UserContextConsumer} from "./Contexxt"

function Header() {
    return (
        <header>
            <UserContextConsumer>
                {obj => (
                    <p>Welcome, {obj.UN}!</p>
                )}
            </UserContextConsumer>

        </header>
    )
}

export default Header
