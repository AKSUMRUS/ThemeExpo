import React, {useState} from "react";
import {DARK_THEME} from "../styles/darkTheme";
import {LIGHT_THEME} from "../styles/lightTheme";

const ThemeContext = React.createContext({theme: 'DARK', setDarK: () => {}, setLight: () => {}})

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('DARK');

    const setDark = () => {
        setTheme('DARK');
    }

    const setLight = () => {
        setTheme('LIGHT');
    }

    return <ThemeContext.Provider value={{theme,setDark,setLight}}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
    const{theme,setDark,setLight} = React.useContext(ThemeContext);
    return {
        theme,
        setDark,
        setLight,
        isLight: theme === 'LIGHT',
        isDark: theme === 'DARK',
        THEME_COLOR:theme === 'LIGHT' ? LIGHT_THEME: DARK_THEME,
    }
}
