import React from 'react'

function Personal_info_component(props){
    return(
        <div className="Personal_info_component">
                
                <h3>Personal Info :</h3><br/>
            <input 
                type = "text"
                value = {props.firstname} 
                name = "firstname" 
                placeholder="First Name" 
                onChange = {props.handleChange}
            /><br />
            <input 
                type = "text"
                value = {props.lastname} 
                name = "lastname" 
                placeholder="Last Name" 
                onChange = {props.handleChange}
            /><br />
            <input 
                type = "number"
                value = {props.age} 
                name = "age" 
                placeholder="Age"  
                onChange = {props.handleChange}
            /><br />

        </div>
    )
}

export default Personal_info_component