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
    render() {
        console.log(this.props);
        const movie = this.state.activeMovie;
        return (
            <div className="container">
                {
                    movie.length !== 0 &&
                    <div className="active-movie">
                        <img className="container" src= {"https://image.tmdb.org/t/p/original/" + movie.backdrop_path} alt={ movie.original_title } />
                        <h3 align="center" className="active-movie__title">{ movie.original_title }</h3>
                        <h4 className="active-movie__overview_title">
                            Overview: <span> <h5 className="active-movie__overview" align="center">{ movie.overview }</h5></span>
                        </h4>
                        <h4 className="active-movie__genres_title">
                            Genres: <span> <h5 className="active-movie__genres" onLoad={() => this.props.genresList()}>
                        </h5></span>
                        </h4>
                        <button className="movie_buttons">
                            <Link to="/search">Go Back</Link>
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default Movie;
