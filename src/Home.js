import { requirePropFactory } from '@material-ui/core';
import React from 'react';
import "./Home.css";
import herbs from "./herbs.jpg";
import Product from './Product';


function Home() {
    return (
        <div className="Home">
            <div className="home__container">
                <img src={herbs} className="home__image" alt="background with herbs"/>

                <div className="home__row">
                    <Product title="Pilon et mortier en bois d'olivier." price="39.90" image="https://www.cdiscount.com/pdt2/7/1/9/1/300x300/ber3700598603719/rw/berard-petit-mortier-bois-olivier-90080.jpg" rating={5} />
                    <Product title="Diffuseur d'huiles essentielles 300ml" price="29.90" image="https://www.cdiscount.com/pdt2/6/0/0/1/300x300/auc0740306563600/rw/dewinner-300ml-humidificateur-portable-ultrasoniqu.jpg" rating={4} />
                    <Product title="Huille essentielle BIO de menthe verte 10ml" price="2.20" image="https://www.cdiscount.com/pdt2/7/7/4/1/700x700/auc3760246895774/rw/huile-essentielle-bio-de-menthe-verte-10ml.jpg" rating={5} />
                </div>

                <div className="home__row">
                    <Product title="Ensemble d'huiles esssentielles 5x10ml : Menthe Poivrée, Tea Tree, Cajeput, Eucalyptus, Camphor" price ="28.90" image="https://www.cdiscount.com/pdt2/8/2/5/1/700x700/auc8425520915825/rw/ensemble-d-huile-essentielle-de-camphoracee-d-arom.jpg" rating={3} />
                </div>

                <div className="home__row">
                    <Product title="Huile de massage à l'arnica" price="11.10" image="https://www.cdiscount.com/pdt2/3/4/6/1/700x700/wel3596206226346/rw/weleda-huile-de-massage-cor.jpg" rating={3} />
                    <Product title="Ensemble d’huile essentielle d’aromathérapie 3x10ml : Patchouli, myrrhe, menthe poivrée" price="15" image="https://www.cdiscount.com/pdt2/6/2/7/1/700x700/auc8425520915627/rw/ensemble-d-huile-essentielle-d-aromatherapie-3x10.jpg" rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home
