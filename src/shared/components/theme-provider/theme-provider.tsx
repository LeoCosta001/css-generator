import React, { useEffect, useState } from "react";
// Constants
import { STORAGE_KEY } from "../../constants/storage.constant";

type Theme = "light" | "dark";
type ThemeContextType = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContextType>(
    {} as ThemeContextType
);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        const themeSelected = theme === "light" ? "dark" : "light";
        setTheme(themeSelected);

        localStorage.setItem(STORAGE_KEY.THEME, themeSelected);
    };

    useEffect(() => {
        const currentTheme = localStorage.getItem(STORAGE_KEY.THEME);

        if (currentTheme) {
            setTheme((currentTheme as Theme));
        } else {
            localStorage.setItem(STORAGE_KEY.THEME, 'light');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
