import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from './logo.png';

function Login() {

    const signIn = e => {
        e.preventDefault()

        // firebase part
    }

    const register =e => {
        e.preventDefault()

        // firebase part
    }
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
    <div className="login">
        <Link to='/'>
                <img src={ logo } />
        </Link>
    

        <div className="login__container">
            <h1>
                Se connecter
            </h1>

            <form>
                <h5>
                    E-mail
                </h5>
                <input type="text" value={ email } onChange={ e => setEmail(e.target.value) } />
                <h5>
                        Mot de passe
                </h5>
                <input type="password" value={ password } onChange={ e => setPassword(e.target.value) } />

                <button type="submit" onClick={ signIn } className="login__signInButton">
                    Se connecter !
                </button>

                <p className="charts">
                    En vous connectant, vous acceptez les termes et condition de EssentiallyOils, sa politique de cookies et ses publicités suggérées.
                </p>

                <button onClick={ register } className="login__registerButton">
                    Créer un compte EssentaillyOils
                </button>
            </form>
        </div>
    </div>
    )
}

export default Login