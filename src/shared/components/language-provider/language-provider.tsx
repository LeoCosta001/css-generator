import React from "react";

// Interfaces
interface LanguageProviderProps {
    children: JSX.Element;
}

export enum LANGUAGE_LIST {
    PT_BR = 'pt-BR',
    EN_US = 'en-US'
}

interface LanguageProviderContext {
    getCurrentLanguage: LANGUAGE_LIST;
    updateCurrentLanguage: (newLanguage: LANGUAGE_LIST) => void;
}


// Context
export const LanguageContext = React.createContext<LanguageProviderContext>(
    {} as LanguageProviderContext
);

export const LanguageProvider = (props: LanguageProviderProps): JSX.Element => {
    const i18nLocalStorageKey = 'i18nextLng';
    const languageDefault = LANGUAGE_LIST.EN_US;

    // Methods
    const getCurrentLanguage = () => {
        const currentLanguage = localStorage.getItem(i18nLocalStorageKey);

        if (!currentLanguage) {
            updateCurrentLanguage(languageDefault);
            return languageDefault;
        }
        return (currentLanguage as LANGUAGE_LIST);
    };

    const updateCurrentLanguage = (newLanguage: LANGUAGE_LIST) => {
        localStorage.setItem(i18nLocalStorageKey, newLanguage);
        window.location.reload();
    };

    return (
        <LanguageContext.Provider value={{
            getCurrentLanguage: getCurrentLanguage(),
            updateCurrentLanguage: updateCurrentLanguage
        }}>
            {props.children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageProviderContext => React.useContext(LanguageContext);
