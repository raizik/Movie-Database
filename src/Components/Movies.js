import React from 'react';

const Movies = props => (
    <div className="container">
        <div className="row">
            { props.movies.map((movie) => {
                return (
                    <div key={movie.id} className="col-md-4" style={{ marginBottom: "2rem" }}>
                        <div className="movie__box">
                            <div>
                                <img className="movie__box-img" src= {"https://image.tmdb.org/t/p/w185_and_h278_bestv2/" + movie.poster_path} alt={ movie.original_title } />
                                <div className="movie__text">
                                    <h5 className="movie__title">
                                        {movie.title.length < 20 ? `${ movie.title }` : `${movie.title.substring(0, 25)}...`}</h5>
                                    <p className="movie__subtitle">Popularity rate: <span>
                                        {movie.popularity}
                                    </span></p>
                                </div>
                                <button className="movie_buttons">Show More</button>
                            </div>
                        </div>
                    </div>
                )
            }) }
        </div>
    </div>
);

export default Movies;