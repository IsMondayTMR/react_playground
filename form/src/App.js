import React, {Component} from "react"


class App extends Component {
    constructor() {
        super()
        this.state = {
            firstname : "",
            lastname : "",
            age : "",
            gender : "",
            destination:"",
            Seafood : false,
            vegetarian : false, 
            kosher : false,
            lactosefree : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        const {name,value, type, checked} = event.target
       type === "checkbox" ? this.setState({[name] : checked}) :  this.setState(
            {[name] : value}
        )
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
            'Dietary restrictions : ' +'\n' + (this.state.Seafood ? " Seafood, " : null) +'\n' +
                    (this.state.vegetarian ? " vegetarian, " : null) +'\n' +
                    (this.state.kosher ? " kosher, " : null +'\n') +
                    (this.state.lactosefree ? " lactosefree, " : null) +'\n'
         )
        
        

    }
    render() {
        return (
            <main>
                <form onSubmit = {this.handleSubmit}>
                <h3>Personal Info :</h3><br/>
                    <input 
                        type = "text"
                        value = {this.state.firstname} 
                        name = "firstname" 
                        placeholder="First Name" 
                        onChange = {this.handleChange}
                    /><br />
                    <input 
                        type = "text"
                        value = {this.state.lastname} 
                        name = "lastname" 
                        placeholder="Last Name" 
                        onChange = {this.handleChange}
                    /><br />
                    <input 
                        type = "number"
                        value = {this.state.age} 
                        name = "age" 
                        placeholder="Age"  
                        onChange = {this.handleChange}
                    /><br />
                    
                    <h4>gender :</h4><br/>
                    <label>        
                        <input 
                            type = "radio" 
                            name = "gender"
                            value = "male"
                            checked = {this.state.gender === "male"} 
                            onChange = {this.handleChange}
                        /> Male
                    </label>
                    <br />
                    
                    <label>
                        <input 
                            type = "radio" 
                            name = "gender"
                            value = "female"
                            checked = {this.state.gender === "female"} 
                            onChange = {this.handleChange}
                        /> Female
                    </label>
                    <br />
                    <h4>Destination :</h4><br/>    
                    <select 
                        namevalue = {this.state.destination}
                        name = "destination"
                        onChange = {this.handleChange}
                        >
                        <option value ="大阪（おおさか）"> 大阪（おおさか）</option>
                        <option value ="名古屋（なごや）"> 名古屋（なごや）</option>
                        <option value ="横浜（よこはま）"> 横浜（よこはま）</option>
                        <option value ="東京（とうきょう）"> 東京（とうきょう）</option>
                    </select>
                    {/* Create select box for location here */}
                    <br />
                     <h4>dietary restrictions :</h4><br/>
                    <label>
                        <input 
                        type ="checkbox" 
                        name = "Seafood" 
                        checked = {this.state.Seafood} 
                        onChange = {this.handleChange}/> Seafood </label>
                    <br />
                    
                    <label>
                        <input 
                        type ="checkbox" 
                        name = "vegetarian" 
                        checked = {this.state.vegetarian} 
                        onChange = {this.handleChange}/> vegetarian </label>
                    <br />
                    
                    <label>
                        <input 
                        type ="checkbox" 
                        name = "kosher" 
                        checked = {this.state.kosher} 
                        onChange = {this.handleChange}/> kosher </label>
                    <br />
                    
                    <label>
                        <input 
                        type ="checkbox" 
                        name = "lactosefree" 
                        checked = {this.state.lactosefree} 
                        onChange = {this.handleChange}/> lactosefree </label>
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    
                    <button type = "submit">Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstname} {this.state.lastname}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    {this.state.Seafood ? " Seafood, " : null}
                    {this.state.vegetarian ? " vegetarian, " : null}
                    {this.state.kosher ? " kosher, " : null}
                    {this.state.lactosefree ? " lactosefree, " : null}
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default App
