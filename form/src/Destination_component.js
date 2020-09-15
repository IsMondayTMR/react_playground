import React from 'react'

function DietaryRestriction(props){
    return(
        <div className = "DietaryRestriction">
             <h4>Destination :</h4><br/>    
                    <select 
                        value = {props.destination}
                        name = "destination"
                        onChange = {props.handleChange}
                        >
                        <option value="">-- Please Choose a destination --</option>
                        <option value ="大阪（おおさか）"> 大阪（おおさか）</option>
                        <option value ="名古屋（なごや）"> 名古屋（なごや）</option>
                        <option value ="横浜（よこはま）"> 横浜（よこはま）</option>
                        <option value ="東京（とうきょう）"> 東京（とうきょう）</option>
                    </select>
                    {/* Create select box for location here */}
                    <br />
        </div>
    )
}

export default DietaryRestriction