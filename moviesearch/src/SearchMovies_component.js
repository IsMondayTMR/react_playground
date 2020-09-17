import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state = { 
                        query : "",
                        movies : [] };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    async handleSubmit(event){
        const query = this.state.query
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=09bb9bfcb9a6f49ba8995be85152d396&language=en-US&query=${query}&page=1&include_adult=false`;
        event.preventDefault()
                try{
                    const res = await fetch(URL);
                    const data  = await res.json();
                    this.setState({
                        movies : data.results
                    })
            
                    console.log(data)

                    
                }catch(err){
                    console.error(err);
                }
                
    }
    handleChange(event){
        const {name , value}  = event.target
            this.setState({
                [name] : value
            })
    }

    render(){
        const movie_title = this.state.movies.map(movie => movie.title)
       
        return(
            <>
                <form className = "searchForm" onSubmit = {this.handleSubmit}>
                    <label 
                        className="querylabel" 
                        htmlFor="query">Movie Name
                    </label>
                    <input 
                        className = "queryInput" 
                        type ="text" 
                        name ="query" 
                        value = {this.state.query} 
                        placeholder ="i.e. Jurassic Park" 
                        onChange = {this.handleChange}
                    />
                    <button className = "submitButton" type = "submit">Search</button>
                        
                </form>
                <div className = "card-list">
                    {/* {{movie_title}} */}
                        {this.state.movies.filter(movie => movie.poster_path).map(movie => (
                            <div className="card" key = {movie.id}>
                                <img className="card--image"
                                    
                                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                                    alt={movie.title + ' poster'}
                                    />

                                <div className="card--content">
                                    <h3 className="card--title">{movie.title}</h3>
                                    <p><small>RELEASE DATE: {movie.release_date}</small></p>
                                    <p><small>RATING: {movie.vote_average}</small></p>
                                    <p className="card--desc">{movie.overview}</p>
                                </div>

                        </div>
                    ))}
                </div>
            </>
        )
    }
}

export default Form