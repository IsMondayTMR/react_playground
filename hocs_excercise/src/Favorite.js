import React from 'react'
import Toggler from './hocs/withToggler'
    function Favorite(props){
      
        return(
            <Toggler  render = {
                (on,handleToggle, defaultOption)=>
                    (<div className = "Favorite_container">
                        <h3>Click heart to favorite</h3>
                        <h1>
                            <span onClick = {handleToggle}>
                            {on ? "❤️" : "♡"}
                            </span>
                        </h1>
                    </div>)
                
            }/>
        )
    }

{/* export default withToggler(Favorite, {option : false}) */}
  // return(
        //     <div className = "Favorite_container">
        //         <h3>Click heart to favorite</h3>
        //         <h1>
        //             <span onClick = {props.toggle}>
        //                {props.handleToggle ? "❤️" : "♡"}
        //             </span>
        //         </h1>
        //     </div>
        // )
export default Favorite