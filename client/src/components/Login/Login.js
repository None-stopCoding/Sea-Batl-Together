import { useState } from 'react';
import './Login.css';

export const Login = () => {
    const [playButtonVisibility, hidePlayButton] = useState("");

    const startLogin = () => {
        hidePlayButton("scale-out");
    };

    return (
        <div className="sb-login">
            <img alt="header"
                width='95%'
                height='100%'
                className="sb-login__header"
                src={process.env.PUBLIC_URL + '/images/login/header.svg'}/>

            <a  className={'sb-login__play btn-floating pulse cyan lighten-2 scale-transition ' + playButtonVisibility}
                onClick={startLogin}
            >
                <i className="material-icons">
                    <img alt="play button"
                        width='217px'
                        height='217px'
                        src={process.env.PUBLIC_URL + '/images/login/play.svg'}/>
                </i>
            </a>
        </div>
    );
}