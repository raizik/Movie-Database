import React from "react";
// import {unstable_renderSubtreeIntoContainer} from "react-dom";
import { Link } from "react-router-dom";

const API_KEY = "6d4c4cb1f758aaee493e26f4efadc354"

class Movie extends React.Component {
    state = {
        activeMovie: []
    }
    componentDidMount = async () => {
    const movie_id = this.props.location.state.id;
    // e.preventDefault()
    const req = await fetch
    (`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
    const res = await req.json();
    this.setState({ activeMovie: res });
    console.log(this.state.activeMovie);
    /*this.setState({ activeMovie: data.results })
    console.log(this.state.activeMovie)*/
    }
    genresList() {
        const genres = this.state.activeMovie.genres;
        genres.map(function(d, idx){
            return (<li key={idx}>{d.name}</li>)
        })

    }
    render() {
        const movie = this.state.activeMovie;
        //const listItems = movie.genres.map((d) => <li key={d.name}>{d.name}</li>);

        return (
            <div className="container">
                {
                    movie.length !== 0 &&
                    <div className="active-movie">
                        <img className="container" src= {"https://image.tmdb.org/t/p/original/" + movie.backdrop_path} alt={ movie.original_title } />
                        <h3 align="center" className="active-movie__title">{ movie.original_title }</h3>
                        <h4 className="active-movie__title">Tagline: { movie.tagline }</h4>
                        <h4 className="active-movie__title">Vote Average: { movie.vote_average }</h4>
                        <h4 className="active-movie__title">Overview: </h4>
                        <span> <h5 className="active-movie__text" align="center">{ movie.overview }</h5></span>
                        <h4 className="active-movie__title">Genres: </h4>
                        <h5 className="active-movie__text">{
                            movie.genres.map(function(d, idx){
                            return (<li key={idx}>{d.name}</li>)
                        })
                        }
                        </h5>
                        <button className="movie_buttons">
                            <Link to="/search">Go Home</Link>
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default Movie;
