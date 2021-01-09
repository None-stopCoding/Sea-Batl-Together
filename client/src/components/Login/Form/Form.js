import { useContext } from 'react';
import { LanguageContext } from '../../App/LanguageProvider';
import { Input } from './Input/Input';
import './Form.css';

export const Form = ({ loginFormEnabled: loginEnabled }) => {
    const { tr } = useContext(LanguageContext);
    
    return (
        <div className="sb-form">
            <div className={'sb-form__container scale-transition scale-out ' + (loginEnabled ? 'scale-in' : '')}>
                <form className="sb-form__inner" autoComplete='off'>
                    <Input  type='text' id='login' label={ tr('Логин') }/>
                    <Input  type='password' id='password' label={ tr('Пароль') }/>

                    <div className="sb-form__submitContainer">
                        <div className="sb-form__submit enter z-depth-4 btn-floating waves-effect">
                            <span className='sb-form__submit-text'>{ tr('Вход') }</span>
                        </div>
                        <div className="sb-form__submit register z-depth-4 btn-floating waves-effect">
                            <span className='sb-form__submit-text'>{ tr('Регистрация') }</span>
                        </div>
                    </div>
                </form>
            </div>

            <div className='sb-oauth'>
                {
                    ['google', 'vk', 'instagram'].map((oauthId, index) =>
                        <div key={index} className={'sb-oauth__icon z-depth-4 btn-floating waves-effect' +
                                                    'scale-transition scale-out ' + (loginEnabled ? 'scale-in' : '')}>
                            <img src={process.env.PUBLIC_URL + '/images/login/social/' + oauthId + '.png'} alt={oauthId}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
};