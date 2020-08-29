import React from "react";
const Form = props => (
    <form onSubmit={props.getMovie} style={{ marginBottom:"2rem" }}>
        <input className="form__input" type="text" name="keyword"/>
        <button className="form__button">Search</button>
    </form>
);

export default Form;

