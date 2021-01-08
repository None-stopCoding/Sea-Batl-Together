import { useState, useContext } from 'react';
import { LanguageContext } from '../App/LanguageProvider';
import { ToggleLanguageButton } from './ToggleLanguage/ToggleLanguage';
import './Login.css';

export const Login = () => {
    const { tr } = useContext(LanguageContext);
    const [loginStarted, initLogin] = useState(false);

    const startLogin = () => {
        initLogin(true);

    };

    return (
        <div className="sb-login">
            <img alt="header"
                width='95%'
                height='100%'
                className="sb-login__header"
                src={process.env.PUBLIC_URL + '/images/login/header.svg'}/>

            {
                !loginStarted &&
                <button className='sb-login__play btn-floating pulse cyan lighten-2'
                        onClick={startLogin}
                >
                    <i className="material-icons">
                        <img alt="play button"
                            width='217px'
                            height='217px'
                            src={process.env.PUBLIC_URL + '/images/login/play.svg'}/>
                    </i>
                </button>
            }

            {
                loginStarted && (
                    <>
                    <div className={'sb-login__auth scale-transition scale-out ' + (loginStarted ? 'scale-in' : '')}>
                        <div className="sb-login__auth-container container">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="text" id="login" className="autocomplete" />
                                    <label htmlFor="login">{ tr('Логин') }</label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <ToggleLanguageButton/>
                    </>
                )
            }
        </div>
    );
};