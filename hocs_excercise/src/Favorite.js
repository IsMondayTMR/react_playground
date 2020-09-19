import React from 'react'
import withToggler from './hocs/withToggler'
    function Favorite(props){
        return(
            <div className = "Favorite_container">
                <h3>Click heart to favorite</h3>
                <h1>
                    <span onClick = {props.toggle}>
                       {props.handleToggle ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        )
    }

export default withToggler(Favorite, {option : false})