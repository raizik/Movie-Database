import React, {Component} from 'react';
import './App.css';

import Form from "./Components/From";
import Movies from "./Components/Movies"

const API_KEY = "6d4c4cb1f758aaee493e26f4efadc354"

class App extends Component {
    state = {
        movies: [],
        category: [],
        selectedCat: 'year'
    }
    constructor(props) {
        super(props);
        // this.state.movies = []
        // this.clear = this.clear.bind(this);
        this.handleOnChange.bind(this);
    }
    getMovieByCat = async (e) => {
        const keyword = e.target.elements.keyword.value;
        const cat = (this.state.selectedCat === 'year') ? 'primary_release_year' : 'query';
        const url_part = (this.state.selectedCat === 'year') ? 'discover' : 'search';
        e.preventDefault()
        const api_call = await fetch(`https://api.themoviedb.org/3/${url_part}/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&${cat}=${keyword}`)
        const data = await api_call.json()
        this.setState({ movies: data.results })
    }
    handleOnChange = async (e) => {
        const cat = e.target.value;
        this.setState({ selectedCat: cat });
        console.log("selectedCat: ", this.state.selectedCat);
    }
    componentDidMount = () => {
        const json = localStorage.getItem("movies");
        const movies = JSON.parse(json);
        this.setState({ movies : movies, category: ['year', 'keyword']})
    }
    componentDidUpdate = () => {
        const movies = JSON.stringify(this.state.movies);
        localStorage.setItem("movies", movies);
    }
    /*clear() {
        this.setState({ movies: [] })
        localStorage.setItem("movies", "");
    }*/
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">RMDb</h1>
                </header>
                <Form getMovie={this.getMovieByCat} selectedCat={this.state.selectedCat} handleOnChange={this.handleOnChange}/>
                <Movies movies={this.state.movies}/>
            </div>
        );
    }
}
export default App;
