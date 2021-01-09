import { useContext } from 'react';
import { LanguageContext } from '../../App/LanguageProvider'
import './ToggleLanguage.css';

export const ToggleLanguageButton = () => {
    const { current, label, change } = useContext(LanguageContext);
    return (
        <div className='sb-language__toggle z-depth-4 btn-floating waves-effect'
             onClick={(e) => change(current === 'russian' ? 'english' : 'russian')}>{ label }</div>
    );
};