import { useState } from 'react';
import { PlayButton } from './PlayButton';
import { Form } from './Form/Form';
import { ToggleLanguageButton } from './ToggleLanguage/ToggleLanguage';
import './Login.css';

export const Login = () => {
    const [loginStarted, initLogin] = useState(false);
    const [loginFormEnabled, showLoginForm] = useState(false);

    const startLogin = () => {
        initLogin(true);
        setTimeout(() => showLoginForm(true), 100);
    };

    return (
        <div className="sb-login">
            <img alt="header"
                width='95%'
                height='100%'
                className="sb-login__header"
                src={process.env.PUBLIC_URL + '/images/login/header.svg'}/>

            {
                loginStarted
                ?   <>
                        <Form {... { loginFormEnabled }}/>
                        <ToggleLanguageButton/>
                    </>
                :   <PlayButton {... { startLogin }}/>
            }
        </div>
    );
};