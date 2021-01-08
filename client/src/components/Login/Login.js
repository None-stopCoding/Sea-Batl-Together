import { useState, useContext } from 'react';
import { LanguageContext } from '../App/LanguageProvider';
import { ToggleLanguageButton } from './ToggleLanguage/ToggleLanguage';
import './Login.css';

export const Login = () => {
    const { tr } = useContext(LanguageContext);
    const [loginStarted, initLogin] = useState(false);

    const startLogin = () => {
        initLogin(true);
        setTimeout(() => {
            document.querySelector('.sb-login__auth').classList.add('scale-in');

            const inputFields = document.querySelectorAll('input');
            console.log(inputFields);
            inputFields.forEach((input) => {
                input.addEventListener('focus', () => {
                    input.parentElement.classList.add('focused');
                });

                input.addEventListener('blur', () => {
                    const value = input.value;
                    if (value === '') {
                        input.classList.remove('filled');
                        input.parentElement.classList.remove('focused');
                    } else {
                        input.classList.add('filled');
                    }
                });
            })
        }, 100);
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
                    <div className={'sb-login__auth scale-transition scale-out'}>
                        <div className="sb-login__auth-container">
                            <div className="sb-login__auth-input">
                                <label htmlFor="login" className='form-label'>{ tr('Логин') }</label>
                                <input  type="text" id="login"
                                        className="form-input input-login"
                                        autoComplete="off"/>
                            </div>
                            <div className="sb-login__auth-input">
                                <label htmlFor="password" className='form-label'>{ tr('Пароль') }</label>
                                <input  type="password" id="password"
                                        className="form-input input-pass"
                                        autoComplete="off"/>
                            </div>
                            <div className="sb-login__auth-submitContainer">
                                <div className="sb-login__auth-submit enter z-depth-4 btn-floating waves-effect">
                                    <span className='sb-login__auth-submit-text'>{ tr('Вход') }</span>
                                </div>
                                <div className="sb-login__auth-submit register z-depth-4 btn-floating waves-effect">
                                    <span className='sb-login__auth-submit-text'>{ tr('Регистрация') }</span>
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