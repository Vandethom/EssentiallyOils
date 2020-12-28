import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import logo from './logo.png';
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const signIn = e => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register =e => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // creates a user with email and password
                console.log(auth);
                if (auth) { 
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        // firebase part
    }
    
    return (
    <div className="login">
        <Link to='/'>
                <img className="login__logo" src={ logo } />
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