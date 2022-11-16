import React, { FC, useMemo, useState } from 'react';
import { Theme, ThemeContext } from '../lib/ThemeContext';
import {LOCAL_STORAGE_THEME_KEY} from 'shared/const/localStorage';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
document.body.className = defaultTheme;

interface ThemeProviderProps {
   initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
   const {
      children,
      initialTheme,
   } = props;

   const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

   const defaultProps = useMemo(() => ({
      theme: theme,
      setTheme: setTheme,
   }), [theme]);

   return (
      <ThemeContext.Provider value={defaultProps}>
         {children}
      </ThemeContext.Provider>
   );
};

export default ThemeProvider;
