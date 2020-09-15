import React from 'react'

function Destination_component(props){
    return(
        <div className = "Destination_component">
             <h4>dietary restrictions :</h4><br/>
                    <label>
                        <input 
                        type ="checkbox" 
                        name = "Seafood" 
                        checked = {props.dietaryRestriction.Seafood} 
                        onChange = {props.handleChange}/> Seafood </label>
                    <br />
                    
                    <label>
                        <input 
                        type ="checkbox" 
                        name = "vegetarian" 
                        checked = {props.dietaryRestriction.vegetarian} 
                        onChange = {props.handleChange}/> vegetarian </label>
                    <br />
                    
                    <label>
                        <input 
                        type ="checkbox" 
                        name = "kosher" 
                        checked = {props.dietaryRestriction.kosher} 
                        onChange = {props.handleChange}/> kosher </label>
                    <br />
                    
                    <label>
                        <input 
                        type ="checkbox" 
                        name = "lactosefree" 
                        checked = {props.dietaryRestriction.lactosefree} 
                        onChange = {props.handleChange}/> lactosefree </label>
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
        </div>
    )
}

export default Destination_component