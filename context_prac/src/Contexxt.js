import React, {useState } from "react"

const nameContext = React.createContext()

function UserContextProvider (props){

    const [name, setName] = useState("bob")

    function ChangeName(username){
        setName(username)
    }
    return(
        <nameContext.Provider value = {{name , ChangeName}}>
                {props.children}
        </nameContext.Provider>
    )
}
export  {UserContextProvider,nameContext}