import React from 'react'
import Toggler from './hocs/withToggler'
function Menu(){
        return(
            <Toggler defaultOnValue = {true} render = {(on,handleToggle)=>
                       ( <div className = "Menu_container">
                            <button onClick = {handleToggle}>{on ? "Hide" : "Show"} Menu</button>
                            <nav className ="NavBar" style = {{display : on? "block" : "none"} }>
                                <h6>Signed in as Coder123</h6>
                                <a href ="#">Profile</a><br />
                                <a href ="#">Responsitory</a><br />
                                <a href ="#">Stars</a><br />
                                <a href ="#">Gist</a><br />
                            </nav>
                        </div>)
            }/>
            
        )
    }

export default Menu

// function Menu(props){
//     return(
//         <div className = "Menu_container">
//             <button onClick = {props.toggle}>{props.handleToggle ? "Hide" : "Show"} Menu</button>
//             <nav className ="NavBar" style = {{display : props.handleToggle? "block" : "none"} }>
//                 <h6>Signed in as Coder123</h6>
//                 <a href ="#">Profile</a><br />
//                 <a href ="#">Responsitory</a><br />
//                 <a href ="#">Stars</a><br />
//                 <a href ="#">Gist</a><br />
//             </nav>
//         </div>
//     )
// }

// export default withToggler(Menu, {option : true})