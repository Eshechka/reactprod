import {LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes} from "../contexts/theme/ThemeContext";
import {useContext} from "react";


interface UseThemeResult {
    theme: Themes,
    toggleTheme: (arg: Themes) => void,
}

const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = (arg: Themes) => {
        const newTheme = arg === Themes.DARK ? Themes.LIGHT : Themes.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme,
        toggleTheme,
    }
}

export default useTheme;