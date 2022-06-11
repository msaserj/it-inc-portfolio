import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skils} from "./Skills/Skils";
import {Works} from "./Portfolio/Works";
import {Remote} from "./Remote/Remote";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skils/>
            <Works/>
            <Remote/>
        </div>
    );
}

export default App;


