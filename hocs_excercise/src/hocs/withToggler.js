import React, {Component} from 'react'

class Toggler extends Component {
    state ={
        on : this.props.defaultOnValue
    }
    toggle = ()=>{
        this.setState(prev => {
            return ({on : !prev.on})
        })
    }

    render(){

        return (
            <div>
                {this.props.render(this.state.on,this.toggle)}
            </div>
        )
    }

}

Toggler.defaultProps = {
    defaultOnValue: false
}

export default Toggler



// function withToggler(component, defaultoption){
//     return function(props){
//         return(
//             <Toggler component = {component} handleToggle = {defaultoption.option} {...props}/>
//         )
//     }
// }
