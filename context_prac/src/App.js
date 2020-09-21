import React, { Component } from "react"
import Context from "./Contexxt"
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


class App extends Component {
        state ={
            new_userName  : ""
        }
        newname =(e)=>{
            const {name, value} = e.target
            this.setState({[name]:value})
        }
         render() {

            return (
                <div>
                    <Header />
                    <main>
                        <Context.Consumer>
                            {username => (
                                <p className="main">No new notifications, {username}! 🎉</p>
                            )}
                        </Context.Consumer>
                   
                    </main>
                    
                    
                    <input
                        type="text"
                        name="new_userName"
                        placeholder="New username"
                        value={this.state.new_userName}
                        onChange={this.newname}
                    />
                    <button>Change Username</button>
                    
                </div>
          )}
}

export default App