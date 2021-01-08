import { createContext, useState, useEffect } from 'react';
import vacabulary, { vacabLanguage } from '../../utils/vacabulary';

export const LanguageContext = createContext();

export const availableLanguages = {
    russian: 'EN',
    english:  'RU'
};

export const LanguageProvider = (props) => {
    const [current, changeLanguage] = useState(props.defaultLanguage);
    const [label, changeLabel] = useState(availableLanguages[current]);

    useEffect(() => {
        changeLabel(availableLanguages[current]);
    }, [current]);

    const change = (language) => {
        if (availableLanguages[language] && language !== current) {
            changeLanguage(language);
        }
    };

    const tr = (sentence) => {
        const currentVacab = vacabulary[current];
        if (currentVacab) {
            if (currentVacab[sentence]) {
                return currentVacab[sentence];
            } else {
                console.error(`Нет значения '${sentence}' в словаре переводов`);
            }
        } else if (current !== vacabLanguage) {
            console.error(`Нет перевода на язык '${current}' для значения '${sentence}' в словаре переводов`);
        }

        return sentence;
    };
    
    return (
        <LanguageContext.Provider value={{ current, label, change, tr }}>
            { props.children }
        </LanguageContext.Provider>
    );
};
