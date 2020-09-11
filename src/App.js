import React, { Component } from 'react';
import './App.css';

import Form from "./Components/From";
import Movies from "./Components/Movies"

const API_KEY = "6d4c4cb1f758aaee493e26f4efadc354"

class App extends Component {
    state = {
        movies: []
    }
    getMovie = async (e) => {
        const keyword = e.target.elements.keyword.value;
        e.preventDefault()
        const api_call = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&primary_release_year=${keyword}`)
        const data = await api_call.json()
        this.setState({ movies: data.results })
        console.log(this.state.movies)
    }
    /*shouldComponentUpdate = () => {
        return false;
    }*/

    componentDidMount = () => {
        const json = localStorage.getItem("movies");
        const movies = JSON.parse(json);
        this.setState({ movies })
    }
    componentDidUpdate = () => {
        const movies = JSON.stringify(this.state.movies);
        localStorage.setItem("movies", movies);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Enter Year</h1>
                </header>
                <Form getMovie={this.getMovie}/>
                <Movies movies={this.state.movies}/>
            </div>
        );
    }
}
export default App;
