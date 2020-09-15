import React from 'react'

function Gender_component(props){
    return(
        <div className = "Gender_component">
            <h4>gender :</h4><br/>
                    <label>        
                        <input 
                            type = "radio" 
                            name = "gender"
                            value = "male"
                            checked = {props.gender === "male"} 
                            onChange = {props.handleChange}
                        /> Male
                    </label>
                    <br />
                    
                    <label>
                        <input 
                            type = "radio" 
                            name = "gender"
                            value = "female"
                            checked = {props.gender === "female"} 
                            onChange = {props.handleChange}
                        /> Female
                    </label>
                    <br />
        </div>
    )
}

export default Gender_component