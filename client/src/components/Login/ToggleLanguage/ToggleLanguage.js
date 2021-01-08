import { useContext } from 'react';
import { LanguageContext } from '../../App/LanguageProvider'
import './ToggleLanguage.css';

export const ToggleLanguageButton = () => {
    const { current, label, change } = useContext(LanguageContext);
    return (
        <div className='sb-login__language-toggle'
             onClick={(e) => change(current === 'russian' ? 'english' : 'russian')}>{ label }</div>
    );
};