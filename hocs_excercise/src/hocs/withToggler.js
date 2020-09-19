import React, {Component} from 'react'

class Toggler extends Component {
    state ={
        on : this.props.handleToggle
    }
    toggle = ()=>{
        this.setState(prev => {
            return ({on : !prev.on})
        })
    }

    render(){
        const {component : Component, handleToggle, ...props} = this.props

        return(
            <Component handleToggle = {this.state.on} toggle = {this.toggle} {...props}/>
        )
    }

}

 function withToggler(component, defaultoption){
    return function(props){
        return(
            <Toggler component = {component} handleToggle = {defaultoption.option} {...props}/>
        )
    }
}

export default withToggler