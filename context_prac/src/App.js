import React, {useState,useContext} from "react"
import {nameContext} from "./Contexxt"
import Header from "./Header"

    /**
     * Challenge: Add the ability for the user to choose a new username
     * 
     * 1. Add state to this component to hold the new username in a controlled form
     * (https://reactjs.org/docs/forms.html#controlled-components)
     * (https://scrimba.com/p/p7P5Hd/cW8Jdfy)
     * 
     * 2. Change userContext into a component that has state and provides the ability
     * to change the user's username. Make sure to export the provider and consumer
     * as named exports and update their uses anywhere else in the app
     * 
     * 3. Give this App component the ability to update the username in context when the
     * button is clicked
     */


function App (props) {
        const [new_userName, set_new_userName] = useState("")

        const {name,ChangeName} = useContext(nameContext)
    
            return (
                <div>
                    <Header />
                        <main>
                            <p className="main">No new notifications, {name}! 🎉</p>

                            <input
                                type="text"
                                placeholder="New username"
                                value={new_userName}
                                onChange={e => set_new_userName(e.target.value)} 
                            />
                            <button onClick = {()=>{ChangeName(new_userName)}}>Change Username</button>
                        </main>

                </div>
          )
}

export default App