import React from "react";
import 'react-dropdown/style.css';

const Form = props => (
    <form onSubmit={props.getMovie} style={{ marginBottom:"2rem", alignContent:"center" }}>
        <input className="form__input" type="text" name="keyword"/>
        <button title="Search" className="form__button">Search</button>
        <div>
                <select id="lang" onChange={props.handleOnChange} value={props.selectedCat} placeholder="Search">
                    <option value="year">year</option>
                    <option value="keyword">keyword</option>
                </select>
        </div>
            {/*<button className="form__button">Clear</button>*/}
    </form>
);

export default Form;

