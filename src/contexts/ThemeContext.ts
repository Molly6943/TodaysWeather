import React from 'react';
import { Dispatch } from 'react';
import { ThemeAction } from './ThemeProvider';

interface ThemeContextType {
  darkTheme: boolean;
  dispatch: Dispatch<ThemeAction>;
}

const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);

export default ThemeContext;