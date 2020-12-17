import { requirePropFactory } from '@material-ui/core';
import React from 'react';
import "./Home.css";
import herbs from "./herbs.jpg";

function Home() {
    return (
        <div className="Home">
            <div className="home__container">
                <img src={herbs} className="home__image" alt="background with herbs"/>

                <div className="home__row">
                    
                </div>

                <div className="home__row">
                    
                </div>

                <div className="home__row">
                    
                </div>
            </div>
        </div>
    )
}

export default Home
