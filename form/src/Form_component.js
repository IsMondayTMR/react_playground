import React from 'react'
import Personal_info_compoenent from './Personal_info_component'
import Gender_component from './Gender_component'
import Destination_component from './Destination_component'
import DietaryRestriction from './DietaryRestriction'
import Submit_button from './Submit_button'
function Form_component(props){
    return(
        <main className = "content">
                <form onSubmit = {props.handleSubmit}>
                    <Personal_info_compoenent 
                        firstname = {props.data.firstname}
                        lastname = {props.data.lastname}
                        handleChange = {props.handleChange}
                        />  
                    
                    <Gender_component 
                        gender = {props.data.gender}
                        handleChange = {props.handleChange}
                        />
                    <Destination_component
                        destination  = {props.data.destination}
                        handleChange = {props.handleChange}
                        />

                    <DietaryRestriction 
                        dietaryRestriction = {props.data.dietaryRestriction}
                        handleChange = {props.handleChange}
                        />
                   
                    <Submit_button/>
                </form>
                <hr />
                <div className="info">
                    <h2>Entered information:</h2>
                    <p>Your name: {props.data.firstname} {props.data.lastname}</p>
                    <p>Your age: {props.data.age}</p>
                    <p>Your gender: {props.data.gender}</p>
                    <p>Your destination: {props.data.destination}</p>
                    <p>
                        Your dietary restrictions: 
                        {props.data.dietaryRestriction.Seafood ? " Seafood, " : null}
                        {props.data.dietaryRestriction.vegetarian ? " vegetarian, " : null}
                        {props.data.dietaryRestriction.kosher ? " kosher, " : null}
                        {props.data.dietaryRestriction.lactosefree ? " lactosefree, " : null}
                        {/* Dietary restrictions here, comma separated */}
                    </p>
                  </div>
            </main>
    )
}

export default Form_component