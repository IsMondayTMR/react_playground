import React, {Component} from 'react'
import Form_component from './Form_component'

class Form extends Component{
    constructor() {
        super()
        this.state = {
            firstname : "",
            lastname : "",
            age : 0,
            gender : "",
            destination:"",
            dietaryRestriction : {Seafood : false,
                                  vegetarian : false, 
                                  kosher : false,
                                  lactosefree : false}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        const {name,value, type, checked} = event.target
       type === "checkbox" ? 
      this.setState(prevState => {
                return( 
                {dietaryRestriction :
                  {
                    ...prevState.dietaryRestriction,
                      [name] : checked
                  }
                })
                           
        }) 
       :  
       this.setState({[name] : value})
    }
    
    handleSubmit(event){
        event.preventDefault();
         alert('form was submited \n' + 
            'First name is : ' + this.state.firstname +'\n'
            + 
            'Last name is : ' + this.state.lastname +'\n'
            + 
            'Age is : ' + this.state.age +'\n' 
            + 
            'Gender is : ' + this.state.gender +'\n'
            + 
            'Destination is : ' + this.state.destination +'\n'
            + 
            'Dietary restrictions : ' +'\n' + (this.state.dietaryRestriction.Seafood ? " Seafood, " : "") +'\n' +
                    (this.state.dietaryRestriction.vegetarian ? " vegetarian, " : "") +'\n' +
                    (this.state.dietaryRestriction.kosher ? " kosher, " : "") + '\n' +
                    (this.state.dietaryRestriction.lactosefree ? " lactosefree " : "") +'\n'
         )
        
        

    }
    render() {
        return (
           <Form_component 
           handleSubmit = {this.handleSubmit}
           handleChange = {this.handleChange}
           data = {this.state}/>
        )
    }
}

export default Form