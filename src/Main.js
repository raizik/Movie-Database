import React, {Component} from "react";
import './Main.css';

import Home from "./Components/Home"

class Main extends Component {
    render() {
        return (
            <div >
                <Home></Home>

        <header className="App-header">
                    <h1 className="App-title">RMDb</h1>
                </header>
        </div>
        )
    }
}

export default Main;
