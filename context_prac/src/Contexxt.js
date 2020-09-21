import React, { Component } from "react"

const {Provider,Consumer} = React.createContext()

class UserContextProvider extends Component{
    state = {
        name : "bob"
    }

    ChangeName = (username)=>{
        this.setState({name: username})
    }
    render(){
        return(
            <Provider value = {{UN : this.state.name, ChangeName : this.ChangeName}}>
                    {this.props.children}
                </Provider>
        )
    }
}
export  {UserContextProvider, Consumer as UserContextConsumer}