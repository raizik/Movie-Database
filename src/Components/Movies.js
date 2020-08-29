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
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-subtitle">Popularity rate: <span>
                                        {movie.popularity}
                                    </span></p>
                                </div>
                                <button className="movie_buttons">Show Overview</button>
                            </div>
                        </div>
                    </div>
                )
            }) }
        </div>
    </div>
);

export default Movies;