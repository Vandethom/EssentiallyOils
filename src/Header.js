import React from 'react';
import './Header.css';
import logo from './logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        } else {
            auth.signInWithEmailAndPassword();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img className="header__logo" src={logo} />
            </Link>
            
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={ !user && "/login"}>
                    <div onClick={ handleAuthentication } className="header__option">
                        <span className="header__optionLineOne">
                            Bonjour { user ? user.email : 'Invité'}
                        </span>
                        <span className="header__optionLineTwo">
                            { user ? 'Se déconnecter' : 'Se connecter'}
                        </span>
                    </div>
                </Link>
                
                <div className="header__option">
                <span className="header__optionLineOne">
                        Retours
                    </span>
                    <span className="header__optionLineTwo">
                        & Commandes
                    </span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Votre
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <div className="header__optionBasket">
                    <Link to="/checkout">
                        <ShoppingBasketIcon />
                    </Link>
                    
                    <span className="header__optionLineTwo header__basketCount">
                        { basket?.length }
                    </span>
                </div>
                
            </div>
        </div>
    )
}

export default Header
